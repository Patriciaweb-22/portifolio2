import React, { useState } from 'react';
import perfilImg from './assets/perfil.jpeg'; // ajuste o caminho conforme sua estrutura
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, email, assunto, mensagem } = formData;

    if (!nome || !email || !assunto || !mensagem) {
      setFeedback({ message: '❌ Por favor, preencha todos os campos.', type: 'error' });
    } else {
      setFeedback({ message: '✅ Mensagem enviada com sucesso! Em breve entrarei em contato.', type: 'success' });
      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
    }
    setTimeout(() => {
      setFeedback({ message: '', type: '' });
    }, 4000);
  };

  return (
    <>
      {/* ========== NAVBAR ========== */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Portifolio
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#sobre" className="nav-link font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200">
                Sobre Mim
              </a>
              <a href="#projetos" className="nav-link font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200">
                Projetos
              </a>
              <a href="#contato" className="nav-link font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200">
                Contato
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none text-2xl">
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
          <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col pb-5 space-y-3 bg-white/90 backdrop-blur-md rounded-b-2xl transition-all`}>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link block px-3 py-2 text-gray-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition">
              Sobre Mim
            </a>
            <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link block px-3 py-2 text-gray-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition">
              Projetos
            </a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link block px-3 py-2 text-gray-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO + PROFILE PHOTO ========== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 md:pt-20 pb-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100/70 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium mb-5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponível para projetos e consultorias
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Nutrição que
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                transforma vidas
              </span> + tecnologia que inova
            </h1>
            <p className="text-lg text-gray-600 mt-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Graduada em Nutrição, especialista em alimentação escolar e atualmente cursando Tecnologia em
              Sistemas de Informação para Internet. Unindo saúde e inovação digital.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a href="#contato" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all hover:scale-105">
                <i className="fas fa-paper-plane"></i> Vamos conversar
              </a>
              <a href="#sobre" className="inline-flex items-center gap-2 border border-gray-300 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full font-semibold text-gray-700 hover:border-emerald-400 hover:text-emerald-600 transition-all">
                <i className="fas fa-user-astronaut"></i> Sobre mim
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white p-1 rounded-full shadow-2xl">
                <img src={perfilImg} alt="Foto de perfil de Patrícia Lima" className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white shadow-xl" />
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 text-xs font-semibold text-emerald-700 shadow-md flex items-center gap-1">
                <i className="fas fa-utensils text-emerald-500"></i> Alimentação Escolar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOBRE MIM SECTION ========== */}
      <section id="sobre" className="scroll-mt-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold tracking-wide text-sm uppercase bg-emerald-100/50 px-4 py-1 rounded-full">
            Conheça minha trajetória
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
            Sobre <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p className="text-gray-700 text-lg leading-relaxed">
              Olá! Sou <span className="font-semibold text-emerald-700">Patrícia Regina Nunes da Luz Lima</span>,
              residente no município de Barro Duro – PI, local onde nasci e desenvolvi minha trajetória
              pessoal e profissional. Sou graduada em Nutrição e atuo há vários anos na área de alimentação
              escolar, segmento no qual encontrei a oportunidade de contribuir de forma significativa para a
              promoção da saúde e para a formação de hábitos alimentares saudáveis desde a infância.
              Possuo pós-graduação na área de Nutrição, além de diversas formações complementares que
              fortalecem minha qualificação profissional e ampliam meus conhecimentos teóricos e práticos,
              possibilitando uma atuação ética, responsável e comprometida com a qualidade dos serviços
              prestados à comunidade escolar.
              Atualmente, estou cursando Tecnologia em Sistemas de Informação para Internet, com o objetivo de
              ampliar minhas competências na área tecnológica e acompanhar as inovações que contribuem para a
              melhoria dos processos profissionais. A busca por essa formação está relacionada ao interesse em
              integrar conhecimentos de nutrição com recursos tecnológicos, favorecendo a utilização de
              sistemas informatizados na gestão de serviços de alimentação, no acompanhamento nutricional e no
              desenvolvimento de soluções digitais que auxiliem na tomada de decisões de forma mais eficiente
              e estratégica.
              Acredito que a formação continuada é essencial para o aprimoramento profissional e para a
              construção de práticas inovadoras que contribuam para a promoção da saúde, da educação alimentar
              e da qualidade de vida da população.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-white/60 shadow-sm border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                <i className="fas fa-apple-alt text-emerald-500 mr-1"></i> Nutrição Clínica
              </span>
              <span className="bg-white/60 shadow-sm border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                <i className="fas fa-school text-emerald-500 mr-1"></i> Alimentação Escolar
              </span>
              <span className="bg-white/60 shadow-sm border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                <i className="fas fa-laptop-code text-emerald-500 mr-1"></i> Sistemas para Internet
              </span>
              <span className="bg-white/60 shadow-sm border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                <i className="fas fa-chart-line text-emerald-500 mr-1"></i> Gestão de Serviços
              </span>
            </div>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-quote-left text-2xl text-emerald-400"></i>
              <h3 className="text-xl font-semibold">Minha abordagem profissional</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><i className="fas fa-check-circle text-emerald-500 mt-1"></i><span>Educação alimentar e nutricional para crianças e adolescentes</span></li>
              <li className="flex gap-3"><i className="fas fa-check-circle text-emerald-500 mt-1"></i><span>Gestão eficiente da alimentação escolar com apoio de tecnologia</span></li>
              <li className="flex gap-3"><i className="fas fa-check-circle text-emerald-500 mt-1"></i><span>Desenvolvimento de sistemas e ferramentas digitais para nutrição</span></li>
              <li className="flex gap-3"><i className="fas fa-check-circle text-emerald-500 mt-1"></i><span>Compromisso com a saúde pública e qualidade de vida</span></li>
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200/60">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500"><i className="far fa-heart text-rose-400"></i> Disponível</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"><i className="far fa-clock"></i> resposta rápida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROJETO EM ANDAMENTO ========== */}
      <section id="projetos" className="scroll-mt-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold tracking-wide text-sm uppercase bg-emerald-100/50 px-4 py-1 rounded-full">
            <i className="fas fa-code-branch mr-1"></i> Em desenvolvimento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
            Meu Projeto <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">em Andamento</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Unindo nutrição de qualidade com tecnologia inteligente — soluções que transformam a gestão da alimentação escolar.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
            <div className="md:flex">
              <div className="md:w-3/5 p-6 md:p-8">
                <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <i className="fas fa-bullhorn text-emerald-500"></i> meu projeto esta em construções
                </h4>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  <span className="font-semibold text-emerald-700">em andamento</span> – em breve novidades!
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-3">
                    <a href="https://github.com/Patriciaweb-22/portifolio" className="text-sm font-medium text-emerald-600 hover:text-emerald-800 transition flex items-center gap-1">
                      <i className="fab fa-github"></i> Repositório (privado)
                    </a>
                    <span className="text-gray-300">|</span>
                    <a href="https://github.com/Patriciaweb-22/portifolio" className="text-sm font-medium text-emerald-600 hover:text-emerald-800 transition flex items-center gap-1">
                      <i className="fas fa-external-link-alt"></i> Demo em breve
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTATO SECTION ========== */}
      <section id="contato" className="scroll-mt-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold tracking-wide text-sm uppercase bg-emerald-100/50 px-4 py-1 rounded-full">
            Entre em contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
            Vamos <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Criar Juntos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Tem interesse em consultoria nutricional, projetos de alimentação escolar ou soluções tecnológicas para saúde? Mande uma mensagem.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 transition-all hover:shadow-2xl">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <i className="fas fa-envelope-open-text text-emerald-500"></i> Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">Nome completo</label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">Assunto</label>
                <input
                  type="text"
                  id="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  required
                  placeholder="Consultoria / Palestra / Desenvolvimento de sistema"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows="4"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  placeholder="Conte-me sobre seu projeto ou demanda..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <i className="fas fa-paper-plane"></i> Enviar mensagem
              </button>
              {feedback.message && (
                <p className={`text-center text-sm mt-3 font-medium ${feedback.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                  {feedback.message}
                </p>
              )}
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-50/70 to-teal-50/50 rounded-2xl p-6 shadow-md border border-white/70">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-white rounded-full p-3 shadow-sm"><i className="fas fa-phone-alt text-emerald-600 text-xl"></i></div>
                <div>
                  <h4 className="font-bold text-gray-800">Contato direto</h4>
                  <p className="text-gray-600">+55 86 9919-7867</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-white rounded-full p-3 shadow-sm"><i className="fas fa-envelope text-emerald-600 text-xl"></i></div>
                <div>
                  <h4 className="font-bold text-gray-800">E-mail profissional</h4>
                  <p className="text-gray-600">tricialuzz@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-full p-3 shadow-sm"><i className="fas fa-map-marker-alt text-emerald-600 text-xl"></i></div>
                <div>
                  <h4 className="font-bold text-gray-800">Localização</h4>
                  <p className="text-gray-600">Barro Duro, PI · Brasil</p>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <i className="fab fa-twitter text-sky-500"></i> Conecte-se comigo
              </h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/Patriciaweb-22/portifolio" className="flex items-center gap-2 bg-gray-100 hover:bg-emerald-100 transition px-4 py-2 rounded-full text-gray-700">
                  <i className="fab fa-github text-xl"></i> GitHub
                </a>
                <a href="https://wa.me/5586999197867" className="flex items-center gap-2 bg-gray-100 hover:bg-emerald-100 transition px-4 py-2 rounded-full text-gray-700">
                  <i className="fab fa-whatsapp text-xl"></i> WhatsApp
                </a>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-500 flex justify-between">
                <span><i className="far fa-clock"></i> geralmente respondo em <strong>24h</strong></span>
                <span><i className="fas fa-shield-alt"></i> dados protegidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-white/70 border-t border-gray-200 mt-8 py-8 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Patrícia Regina Nunes da Luz Lima — Nutrição & Tecnologia</p>
          <div className="flex gap-6 text-gray-400">
            <a href="#sobre" className="hover:text-emerald-600 text-sm transition">Sobre</a>
            <a href="#projetos" className="hover:text-emerald-600 text-sm transition">Projetos</a>
            <a href="#contato" className="hover:text-emerald-600 text-sm transition">Contato</a>
            <a href="#" className="hover:text-emerald-600 text-sm transition">Privacidade</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
