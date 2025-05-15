import './App.css';
import './index.css'; // Ensure global styles are imported
import React, { useState } from 'react';

// Placeholder for page components
const HomePage = () => <div className="page-content"><h1>Página Inicial</h1><p>Bem-vindo ao Tributos Inclusivos!</p><p>Este é um protótipo para demonstrar a navegação e o layout básico de um aplicativo focado em facilitar o acesso a informações e serviços tributários no município de Palmas.</p></div>;
const TributesPage = () => <div className="page-content"><h1>Meus Tributos</h1><p>Aqui você poderá consultar seus débitos de IPTU e ITBI, simular negociações e aderir aos programas de regularização fiscal de forma simplificada.</p></div>;
const ChatbotPage = () => <div className="page-content"><h1>Chatbot Educativo</h1><p>Utilize nosso chatbot para tirar dúvidas sobre tributos, processos de regularização e entender melhor seus direitos e deveres como contribuinte.</p></div>;

const MorePage = () => (
  <div className="page-content">
    <h1>Mais Informações</h1>
    <p>O projeto "Tributos Inclusivos" visa promover a justiça fiscal e a inclusão socioeconômica em Palmas, facilitando o acesso da população a serviços tributários e programas de regularização de débitos.</p>
    
    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
      <h2>Parceria e Desenvolvimento</h2>
      <p>Este protótipo foi desenvolvido como parte do Projeto Desafio X, uma iniciativa do Centro Universitário Católica do Tocantins.</p>
      <p><strong>Alunos Responsáveis:</strong></p>
      <ul>
        <li>[Nome do Aluno 1]</li>
        <li>[Nome do Aluno 2]</li>
        <li>[Nome do Aluno 3]</li>
        {/* Adicionar mais alunos conforme necessário */}
      </ul>
    </div>
  </div>
);


// Simple Bottom Navigation Component
const BottomNav = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: React.Dispatch<React.SetStateAction<string>> }) => {
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'tributes', label: 'Tributos' },
    { id: 'chatbot', label: 'Chatbot' },
    { id: 'more', label: 'Mais' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <button 
          key={item.id} 
          className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
          onClick={() => setCurrentPage(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  let pageContent;
  switch (currentPage) {
    case 'home':
      pageContent = <HomePage />;
      break;
    case 'tributes':
      pageContent = <TributesPage />;
      break;
    case 'chatbot':
      pageContent = <ChatbotPage />;
      break;
    case 'more':
      pageContent = <MorePage />;
      break;
    default:
      pageContent = <HomePage />;
  }

  return (
    // O div com id="root" é gerenciado pelo React e não deve ser duplicado aqui.
    // A estrutura principal do App já está dentro do escopo do #root renderizado pelo main.tsx
    <>
      <header style={{ padding: '15px', backgroundColor: '#007bff', color: 'white', textAlign: 'center', position: 'sticky', top: 0, zIndex: 1001 }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Tributos Inclusivos Palmas</h2>
      </header>
      <main className="app-container">
        {pageContent}
      </main>
      <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;

