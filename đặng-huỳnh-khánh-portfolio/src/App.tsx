/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Smartphone, 
  ChevronRight, 
  Send,
  AppWindow,
  Briefcase,
  User,
  Cpu,
  Mail as MailIcon,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Khởi đầu', href: '#home' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Kỹ năng', href: '#skills' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030712]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/20">
            K
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">Đặng Huỳnh Khánh</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030712] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium hover:text-purple-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-3 py-1 rounded-full glass text-xs font-semibold text-purple-400 border border-purple-500/20 w-fit"
          >
            IT Student & Developer
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tighter">
            Xin chào, tôi là <span className="gradient-text">Huỳnh Khánh</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
            Tôi là sinh viên CNTT tại Đại học Nam Cần Thơ, đam mê lập trình và phát triển phần mềm. Luôn tìm kiếm giải pháp sáng tạo cho các vấn đề kỹ thuật phức tạp.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2"
            >
              Xem dự án <ChevronRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-xl hover:bg-white/5 transition-colors font-bold"
            >
              Liên hệ
            </motion.a>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800/50 flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col">
              <span className="text-slate-500 text-xs uppercase tracking-widest mb-1">Trường Học</span>
              <span className="font-medium text-slate-200">ĐH Nam Cần Thơ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-xs uppercase tracking-widest mb-1">Ngành</span>
              <span className="font-medium text-slate-200">Công nghệ thông tin</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-xs uppercase tracking-widest mb-1">Vị Trí</span>
              <span className="font-medium text-slate-200">Cần Thơ, VN</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative group justify-self-center lg:justify-self-end mt-12 lg:mt-0"
        >
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden glass p-4 rotate-3 group-hover:rotate-0 transition-transform duration-500">
            {/* Để hiển thị ảnh của bạn: 
                1. Đảm bảo ảnh của bạn có tên 'avatar.jpg'
                2. Tải ảnh lên thư mục gốc của dự án này 
            */}
            <img 
              src="/avatar.jpg" 
              alt="Đặng Huỳnh Khánh" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/developer/800/800";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-10 flex items-center gap-4">
          <span className="w-12 h-px bg-slate-800" /> Giới thiệu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="md:col-span-8 space-y-8 text-xl text-slate-400 font-light leading-relaxed"
          >
            <p>
              Tôi là sinh viên chuyên ngành <span className="text-white font-normal">Công nghệ Thông tin</span> tại <span className="text-white font-normal">Đại học Nam Cần Thơ</span>. Tôi có niềm đam mê mãnh liệt với lập trình và luôn mong muốn tìm tòi, ứng dụng công nghệ để giải quyết các vấn đề thực tiễn.
            </p>
            <p>
              Mục tiêu nghề nghiệp của tôi là trở thành một Full-stack Developer chuyên nghiệp. Tôi luôn chú trọng vào việc viết mã sạch, dễ bảo trì và mang lại trải nghiệm tốt nhất cho người dùng.
            </p>
          </motion.div>
          
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="md:col-span-4"
          >
            <div className="glass p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-slate-500 text-sm">GPA Dự kiến</span>
                <span className="text-2xl font-bold gradient-text">3.8</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-slate-500 text-sm">Năm học</span>
                <span className="text-white font-medium italic">Năm 3</span>
              </div>
              <p className="text-sm italic text-slate-500 text-center leading-relaxed">"Học hỏi không ngừng, nâng tầm bản thân mỗi ngày."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'Frontend', icon: <Layout size={24} />, items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'] },
    { name: 'Backend & App', icon: <Smartphone size={24} />, items: ['Java', 'Android', 'C# / WinForms'] },
    { name: 'Database', icon: <Database size={24} />, items: ['SQL Server', 'MySQL', 'Firebase'] },
    { name: 'Tools', icon: <Cpu size={24} />, items: ['Git & GitHub', 'VS Code', 'Visual Studio'] },
  ];

  return (
    <section id="skills" className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-10 flex items-center gap-4">
          <span className="w-12 h-px bg-slate-800" /> Kỹ năng & Công nghệ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 group hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold mb-6 text-slate-200">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="skill-tag px-3 py-1.5 rounded-lg text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Đồ án CHQLTT WinForms',
      description: 'Hệ thống quản lý thông tin cửa hàng được xây dựng bằng C# và WinForms. Hỗ trợ quản lý hàng hóa, doanh thu và nhân viên.',
      image: 'https://picsum.photos/seed/software/600/400',
      github: 'https://github.com/PumBaaVip/CHQLTT_WINFROM',
      tags: ['C#', 'SQL Server', 'WinForms'],
      color: '#8b5cf6'
    },
    {
      title: 'Thiết kế đồ họa Portfolio',
      description: 'Dự án thể hiện các kỹ năng thiết kế và tư duy thẩm mỹ qua các bài tập thiết kế đồ họa sáng tạo.',
      image: 'https://picsum.photos/seed/design/600/400',
      github: 'https://github.com/PumBaaVip/TKDH',
      tags: ['Design', 'UI/UX'],
      color: '#3b82f6'
    },
    {
      title: 'Ứng dụng Android Mẫu',
      description: 'Dự án phát triển ứng dụng di động Android sử dụng Java, hỗ trợ người dùng quản lý công việc hàng ngày.',
      image: 'https://picsum.photos/seed/mobile/600/400',
      github: 'https://github.com/PumBaaVip',
      tags: ['Java', 'Android SDK'],
      color: '#10b981'
    },
    {
      title: 'Web Responsive Portfolio',
      description: 'Xây dựng website cá nhân hiện đại với hiệu ứng mượt mà, tối ưu hóa cho mọi thiết bị.',
      image: 'https://picsum.photos/seed/web/600/400',
      github: 'https://github.com/PumBaaVip',
      tags: ['React', 'Tailwind', 'Motion'],
      color: '#f59e0b'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-10 flex items-center gap-4">
          <span className="w-12 h-px bg-slate-800" /> Dự án nổi bật
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
              style={{ borderLeftColor: project.color }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <div className="flex gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 bg-white/10 rounded text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors uppercase">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6 bg-white/[0.02]">
                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex gap-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:underline tracking-tight"
                  >
                    <Github size={16} /> VIEW ON GITHUB
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-10 flex items-center gap-4">
          <span className="w-12 h-px bg-slate-800" /> Kết nối
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="space-y-12"
          >
            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
              Hãy cùng tạo nên điều <span className="gradient-text">Kỳ diệu</span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl text-purple-400 group-hover:scale-110 transition-transform">
                  <MailIcon size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email</h4>
                  <a href="mailto:s233248@nctu.eu.vn" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">s233248@nctu.eu.vn</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">GitHub</h4>
                  <a href="https://github.com/PumBaaVip" target="_blank" rel="noreferrer" className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">github.com/PumBaaVip</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            className="glass p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Tên của bạn</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 bg-white/[0.03] rounded-xl border border-white/5 focus:border-purple-500 outline-none transition-all placeholder:text-slate-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-4 bg-white/[0.03] rounded-xl border border-white/5 focus:border-purple-500 outline-none transition-all placeholder:text-slate-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Tin nhắn</label>
                  <textarea 
                    rows={5} 
                    className="w-full px-5 py-4 bg-white/[0.03] rounded-xl border border-white/5 focus:border-purple-500 outline-none transition-all placeholder:text-slate-700 text-white"
                  />
                </div>
                <button className="btn-primary w-full py-5 rounded-xl font-bold flex justify-center items-center gap-3 group active:scale-95">
                  Gửi yêu cầu <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="section-padding pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] tracking-[0.2em] uppercase text-slate-600 font-medium">
        <div>&copy; {new Date().getFullYear()} Đặng Huỳnh Khánh &mdash; Personal Portfolio</div>
        <div className="flex gap-10">
          <a href="mailto:s233248@nctu.eu.vn" className="hover:text-purple-400 transition-colors">s233248@nctu.eu.vn</a>
          <a href="https://github.com/PumBaaVip" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">Github: PumBaaVip</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-purple-500/30">
      {/* Background elements */}
      <div className="glow-bg">
        <div className="glow-blob top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/20" />
        <div className="glow-blob bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/15" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
