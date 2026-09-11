'use client';

import { useEffect, useState } from 'react';

type Locale = 'zh' | 'en';
type CCFRank = 'A' | 'B' | 'C';

const advisorUrl = 'https://people.ucas.ac.cn/~hourui';
const scholarUrl = 'https://scholar.google.com/citations?user=k7cC6BYAAAAJ';

// CCF recommended venues: https://www.ccf.org.cn/Academic_Evaluation/By_category/
const ccfRanks: Record<string, CCFRank> = {
  'IEEE TC': 'A',
  'USENIX Security': 'A',
  ICCD: 'B',
  DAC: 'A',
};

const usenixPublication = {
    year: '2026', tag: 'USENIX Security',
    title: 'Enjoy the Free Lunch, Someone Paid for Us: Escaping Resource Limits of MicroVM-based Containers',
    authors: ['Shiwen Wang', 'Wu Luo', 'Kaicheng Liu', 'Zheyuan Xu', 'Yaowen Zheng', 'Wenhao Wang', 'Shijun Zhao', 'Peinan Li', 'Rui Hou'],
    venueZh: '第35届 USENIX 安全研讨会（USENIX Security 2026）',
    venue: '35th USENIX Security Symposium (USENIX Security 2026)',
    link: 'https://www.usenix.org/conference/usenixsecurity26/presentation/wang-shiwen',
    awardZh: '杰出论文奖入围', award: 'Distinguished Paper Award Runner-Up',
    awardLink: 'https://www.usenix.org/sites/default/files/sec26_runners_up.pdf',
};

const publications = [
  usenixPublication,
  {
    year: '2026', tag: 'IEEE TC',
    title: 'NXT: Sharable Trusted Execution Environment for Multi-Tenant NPU Cluster',
    authors: ['Shiwen Wang', 'Peinan Li', 'Yunkai Bai', 'Wu Luo', 'Guang Yan', 'Dan Meng', 'Rui Hou'],
    venue: 'IEEE Transactions on Computers, 75(9): 3098–3111',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=k7cC6BYAAAAJ&citation_for_view=k7cC6BYAAAAJ:2osOgNQ5qMEC',
  },
  {
    year: '2025', tag: 'ICCD',
    title: 'TIPS: Augment Memory Tagging to Defend Against Prefetcher Side Channels',
    authors: ['Yubiao Huang', 'Peinan Li', 'Huan Qiao', 'Yunkai Bai', 'Shiwen Wang', 'Dan Meng', 'Rui Hou'],
    venueZh: '2025 IEEE 第43届计算机设计国际会议（ICCD 2025）',
    venue: '2025 IEEE 43rd International Conference on Computer Design (ICCD)',
    link: 'https://ieeexplore.ieee.org/abstract/document/11311071/',
  },
  {
    year: '2024', tag: 'DAC',
    title: 'EnTurbo: Accelerate Confidential Serverless Computing via Parallelizing Enclave Startup Procedure',
    authors: ['Yifan Zhu', 'Peinan Li', 'Yunkai Bai', 'Yubiao Huang', 'Shiwen Wang', 'Xingbin Wang', 'Dan Meng', 'Rui Hou'],
    venueZh: '第61届 ACM/IEEE 设计自动化会议（DAC 2024）',
    venue: '61st ACM/IEEE Design Automation Conference (DAC 2024)',
    link: 'https://dl.acm.org/doi/abs/10.1145/3649329.3658492',
  },
  {
    year: '2024', tag: 'DAC',
    title: 'SecPaging: Secure Enclave Paging with Hardware-Enforced Protection against Controlled-Channel Attacks',
    authors: ['Yunkai Bai', 'Peinan Li', 'Yubiao Huang', 'Shiwen Wang', 'Xingbin Wang', 'Dan Meng', 'Rui Hou'],
    venueZh: '第61届 ACM/IEEE 设计自动化会议（DAC 2024）',
    venue: '61st ACM/IEEE Design Automation Conference (DAC 2024)',
    link: 'https://dl.acm.org/doi/abs/10.1145/3649329.3658241',
  },
];

const content = {
  zh: {
    name: '王诗文', nav: ['简介', '动态', '论文', '学术服务', '奖项'],
    eyebrow: '博士研究生 · 计算机系统结构', role: 'Ph.D. Candidate',
    affiliations: ['中国科学院大学', '中国科学院信息工程研究所', '网络空间安全防御全国重点实验室'],
    interests: '研究方向', fields: ['虚拟化安全', '智能系统安全', '机密计算'], explore: '浏览论文',
    photo: '王诗文于 USENIX 会场',
    headings: [['01 / 简介', '关于我'], ['02 / 动态', '近期动态'], ['03 / 论文', '论文列表'], ['04 / 学术服务', '专业服务'], ['05 / 奖项', '荣誉与奖项']],
    about: '王诗文是一名计算机系统结构专业博士研究生，就读于中国科学院大学、中国科学院信息工程研究所和网络空间安全防御全国重点实验室。他的研究方向包括虚拟化和智能系统安全、机密计算，导师是侯锐研究员。他于 2022 年在南京邮电大学获得计算机科学与技术学士学位。',
    newsDate: '2026 年 8 月', newsBefore: '我们的论文', newsAfter: '获得 USENIX Security 2026 杰出论文奖入围（Distinguished Paper Award Runner-Up）。祝贺全体作者！',
    pubNote: '论文标题链接至出版页面', reviewer: '审稿人',
    awards: ['南京邮电大学三好学生标兵', '南京邮电大学一等奖学金', '中国科学院大学三好学生', '中国科学院大学一等学业奖学金', '江苏省高等数学竞赛本科 A 组一等奖'],
    footer: '专注于可信、高效的计算系统。', updated: '更新于 2026 年 9 月',
  },
  en: {
    name: 'Shiwen Wang', nav: ['About', 'News', 'Publications', 'Service', 'Awards'],
    eyebrow: 'Ph.D. Candidate · Computer Architecture', role: 'Ph.D. Candidate',
    affiliations: ['University of Chinese Academy of Sciences', 'Institute of Information Engineering, Chinese Academy of Sciences', 'State Key Laboratory of Cyberspace Security Defense'],
    interests: 'Research interests', fields: ['Virtualization Security', 'AI Systems Security', 'Confidential Computing'], explore: 'Explore publications', photo: 'Shiwen Wang at USENIX',
    headings: [['01 / About', 'About me'], ['02 / News', 'Latest news'], ['03 / Publications', 'Publication list'], ['04 / Academic service', 'Professional service'], ['05 / Awards', 'Honors & awards']],
    about: 'Shiwen Wang is a Ph.D. candidate in Computer Architecture at the University of Chinese Academy of Sciences. He is affiliated with the Institute of Information Engineering, Chinese Academy of Sciences, and the State Key Laboratory of Cyberspace Security Defense. His research interests include virtualization and AI systems security, as well as confidential computing. He is advised by Prof. Rui Hou. He received his B.Sc. in Computer Science and Technology from Nanjing University of Posts and Telecommunications in 2022.',
    newsDate: 'August 2026', newsBefore: 'Our paper', newsAfter: 'was recognized as a Distinguished Paper Award Runner-Up at USENIX Security 2026. Congratulations to all authors!',
    pubNote: 'Titles link to publication pages', reviewer: 'Reviewer',
    awards: ['Outstanding Student Model, Nanjing University of Posts and Telecommunications', 'First-Class Scholarship, Nanjing University of Posts and Telecommunications', 'Outstanding Student, University of Chinese Academy of Sciences', 'First-Class Academic Scholarship, University of Chinese Academy of Sciences', 'First Prize, Jiangsu Provincial Higher Mathematics Competition (Undergraduate Group A)'],
    footer: 'Building trustworthy and efficient computing systems.', updated: 'Last updated September 2026',
  },
};

const sectionIds = ['about', 'news', 'publications', 'service', 'awards'];

function Heading({ pair }: { pair: string[] }) {
  return <div className="section-heading"><p className="kicker">{pair[0]}</p><h2>{pair[1]}</h2></div>;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const t = content[locale];
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  useEffect(() => { document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'; }, [locale]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="wordmark" href="#top">{locale === 'zh' ? '王诗文' : 'Shiwen Wang'}</a>
          <nav className="desktop-nav" aria-label={locale === 'zh' ? '主导航' : 'Primary navigation'}>
            {t.nav.map((item, i) => <a key={item} href={`#${sectionIds[i]}`}>{item}</a>)}
          </nav>
          <div className="language-switch" aria-label={locale === 'zh' ? '语言选择' : 'Language selector'}>
            <button className={locale === 'zh' ? 'active' : ''} onClick={() => setLocale('zh')} type="button" aria-pressed={locale === 'zh'}>中文</button>
            <span>/</span>
            <button className={locale === 'en' ? 'active' : ''} onClick={() => setLocale('en')} type="button" aria-pressed={locale === 'en'}>EN</button>
          </div>
        </div>
      </header>

      <main className="page-layout" id="top">
        <aside className="profile-column">
          <figure className="portrait-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${assetBase}/shiwen-wang.png`} alt={locale === 'zh' ? '王诗文的照片' : 'Portrait of Shiwen Wang'} />
          </figure>
          <h1>{t.name}</h1>
          <p className="hero-role">{t.role}</p>
          <div className="affiliations">{t.affiliations.map((x) => <p key={x}>{x}</p>)}</div>
          <p className="contact-email"><span>{locale === 'zh' ? '邮箱' : 'Email'}: </span><a href="mailto:wangshiwen@iie.ac.cn">wangshiwen@iie.ac.cn</a></p>
          <div className="research-block">
            <p className="micro-label">{t.interests}</p>
            <ul>{t.fields.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </aside>

        <div className="main-column">
          <section className="content-section intro-section" id="about">
            <Heading pair={t.headings[0]} />
            <p className="about-text">{t.about.split(locale === 'zh' ? '侯锐' : 'Rui Hou').map((part, i) => <span key={i}>{i > 0 && <a href={advisorUrl} target="_blank" rel="noreferrer">{locale === 'zh' ? '侯锐' : 'Rui Hou'}</a>}{part}</span>)}</p>
          </section>

          <section className="content-section" id="news">
            <Heading pair={t.headings[1]} />
            <article className="news-item">
              <time>{t.newsDate}</time>
              <p>{t.newsBefore}{' '}<a href={usenixPublication.link} target="_blank" rel="noreferrer">《Enjoy the Free Lunch, Someone Paid for Us》</a>{' '}{t.newsAfter.split(usenixPublication.award).map((part, i) => <span key={i}>{i > 0 && <a href={usenixPublication.awardLink} target="_blank" rel="noreferrer">{usenixPublication.award}</a>}{part}</span>)}</p>
            </article>
          </section>

          <section className="content-section" id="publications">
            <Heading pair={t.headings[2]} />
            <p className="pub-note">{t.pubNote}<span aria-hidden="true"> · </span><a href={scholarUrl} target="_blank" rel="noreferrer">Google Scholar</a></p>
            <div className="publication-list">
              {publications.map((p) => (
                <article className="publication" key={p.title}>
                  <div className="publication-meta"><span className="venue-tag">{p.tag}</span><span className={`ccf-tag ccf-${ccfRanks[p.tag].toLowerCase()}`}>CCF-{ccfRanks[p.tag]}</span><span>{p.year}</span>{'award' in p && p.award && <a className="award-label" href={p.awardLink} target="_blank" rel="noreferrer">{locale === 'zh' ? p.awardZh : p.award}</a>}</div>
                  <h3><a href={p.link} target="_blank" rel="noreferrer">{p.title}</a></h3>
                  <p className="authors">{p.authors.map((a, j) => <span key={a}>{a === 'Rui Hou' ? <a href={advisorUrl} target="_blank" rel="noreferrer">{a}</a> : <span className={a === 'Shiwen Wang' ? 'self-author' : ''}>{a}</span>}{j < p.authors.length - 1 ? ', ' : ''}</span>)}</p>
                  <p className="venue">{locale === 'zh' && p.venueZh ? p.venueZh : p.venue}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="service">
            <Heading pair={t.headings[3]} />
            <div className="service-entry"><strong>{t.reviewer}</strong><p>IEEE Transactions on Dependable and Secure Computing (TDSC)</p></div>
          </section>

          <section className="content-section" id="awards">
            <Heading pair={t.headings[4]} />
            <ul className="awards-list">{t.awards.map((award) => <li key={award}>{award}</li>)}</ul>
          </section>

          <footer><p>{t.footer}</p><p>{t.updated}</p></footer>
        </div>
      </main>
    </div>
  );
}
