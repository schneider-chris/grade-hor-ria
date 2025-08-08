// Variáveis globais
let gradesHorarias = {};
let faltasProfessores = {}; // Armazena as faltas dos professores
let turmaAtual = '';
let diaAtual = 'Segunda-feira';
let tipoUsuario = '';

// Horários por período
const horarios = {
    manha: ['7h30-8h20', '8h20-9h10', '9h10-10h00', '10h20-11h10', '11h10-12h00', '12h00-12h50'],
    tarde: ['13h30-14h20', '14h20-15h10', '15h10-16h00', '16h20-17h10', '17h10-18h00', '18h00-18h30'],
    noite: ['18h40-19h40', '19h40-20h30', '20h30-21h30', '21h30-22h10', '22h10-23h00']
};

// Nomes das turmas
const turmas = {
    manha: ['1º ADM', '1º PORTOS', '1º DS', '1º BIO', '2º ADM', '2º PORTOS', '2º DS', '2º BIO', '3º A', '3º ADM', '3º PORTOS', '3º DS'],
    tarde: ['1º A', '1º B', '1º C', '1º Adm', '1º Portos', '2º A', '2º B', '2º C', '2º D', '3º B', '3º C', '3º D'],
    noite: ['1º STA', '1º STB', '2º STA', '3º STA', '3º STB', '1º COMEX', '2º PORTOS A', '3º PORTOS A']
};

// Função para inicializar as grades horárias
function inicializarGrades() {
    // Exemplo para Turma 1A (Manhã)
    gradesHorarias['1º ADM'] = {
        "Segunda-feira": {
            "7h30-8h20": { materia: "Português", professor: "Prof. Ana" },
            "8h20-9h10": { materia: "Matemática", professor: "Prof. Carlos" },
            "9h10-10h00": { materia: "História", professor: "Prof. Beatriz" },
            "10h20-11h10": { materia: "Ciências", professor: "Prof. Daniel" },
            "11h10-12h00": { materia: "Geografia", professor: "Prof. Eva" },
            "12h00-12h50": { materia: "Educação Física", professor: "Prof. Fernando" }
        },
        "Terça-feira": {
            "7h30-8h20": { materia: "Matemática", professor: "Prof. Carlos" },
            "8h20-9h10": { materia: "Português", professor: "Prof. Ana" },
            "9h10-10h00": { materia: "Ciências", professor: "Prof. Daniel" },
            "10h20-11h10": { materia: "História", professor: "Prof. Beatriz" },
            "11h10-12h00": { materia: "Educação Física", professor: "Prof. Fernando" },
            "12h00-12h50": { materia: "Geografia", professor: "Prof. Eva" }
        },
        "Quarta-feira": {
            "7h30-8h20": { materia: "História", professor: "Prof. Beatriz" },
            "8h20-9h10": { materia: "Geografia", professor: "Prof. Eva" },
            "9h10-10h00": { materia: "Português", professor: "Prof. Ana" },
            "10h20-11h10": { materia: "Matemática", professor: "Prof. Carlos" },
            "11h10-12h00": { materia: "Ciências", professor: "Prof. Daniel" },
            "12h00-12h50": { materia: "Educação Física", professor: "Prof. Fernando" }
        },
        "Quinta-feira": {
            "7h30-8h20": { materia: "Ciências", professor: "Prof. Daniel" },
            "8h20-9h10": { materia: "Educação Física", professor: "Prof. Fernando" },
            "9h10-10h00": { materia: "Geografia", professor: "Prof. Eva" },
            "10h20-11h10": { materia: "Português", professor: "Prof. Ana" },
            "11h10-12h00": { materia: "Matemática", professor: "Prof. Carlos" },
            "12h00-12h50": { materia: "História", professor: "Prof. Beatriz" }
        },
        "Sexta-feira": {
            "7h30-8h20": { materia: "Educação Física", professor: "Prof. Fernando" },
            "8h20-9h10": { materia: "História", professor: "Prof. Beatriz" },
            "9h10-10h00": { materia: "Matemática", professor: "Prof. Carlos" },
            "10h20-11h10": { materia: "Português", professor: "Prof. Ana" },
            "11h10-12h00": { materia: "Geografia", professor: "Prof. Eva" },
            "12h00-12h50": { materia: "Ciências", professor: "Prof. Daniel" }
        }
    };

    // Exemplo para Turma 1B (Manhã)
    gradesHorarias["1º PORTOS"] = {
        "Segunda-feira": {
            "7h30-8h20": { materia: "Matemática", professor: "Prof. Carlos" },
            "8h20-9h10": { materia: "Português", professor: "Prof. Ana" },
            "9h10-10h00": { materia: "Geografia", professor: "Prof. Eva" },
            "10h20-11h10": { materia: "História", professor: "Prof. Beatriz" },
            "11h10-12h00": { materia: "Ciências", professor: "Prof. Daniel" },
            "12h00-12h50": { materia: "Educação Física", professor: "Prof. Fernando" }
        },
        "Terça-feira": {
            "7h30-8h20": { materia: "Português", professor: "Prof. Ana" },
            "8h20-9h10": { materia: "História", professor: "Prof. Beatriz" },
            "9h10-10h00": { materia: "Educação Física", professor: "Prof. Fernando" },
            "10h20-11h10": { materia: "Matemática", professor: "Prof. Carlos" },
            "11h10-12h00": { materia: "Geografia", professor: "Prof. Eva" },
            "12h00-12h50": { materia: "Ciências", professor: "Prof. Daniel" }
        },
        "Quarta-feira": {
            "7h30-8h20": { materia: "Ciências", professor: "Prof. Daniel" },
            "8h20-9h10": { materia: "Educação Física", professor: "Prof. Fernando" },
            "9h10-10h00": { materia: "Matemática", professor: "Prof. Carlos" },
            "10h20-11h10": { materia: "Geografia", professor: "Prof. Eva" },
            "11h10-12h00": { materia: "Português", professor: "Prof. Ana" },
            "12h00-12h50": { materia: "História", professor: "Prof. Beatriz" }
        },
        "Quinta-feira": {
            "7h30-8h20": { materia: "Geografia", professor: "Prof. Eva" },
            "8h20-9h10": { materia: "Ciências", professor: "Prof. Daniel" },
            "9h10-10h00": { materia: "História", professor: "Prof. Beatriz" },
            "10h20-11h10": { materia: "Educação Física", professor: "Prof. Fernando" },
            "11h10-12h00": { materia: "Matemática", professor: "Prof. Carlos" },
            "12h00-12h50": { materia: "Português", professor: "Prof. Ana" }
        },
        "Sexta-feira": {
            "7h30-8h20": { materia: "História", professor: "Prof. Beatriz" },
            "8h20-9h10": { materia: "Matemática", professor: "Prof. Carlos" },
            "9h10-10h00": { materia: "Português", professor: "Prof. Ana" },
            "10h20-11h10": { materia: "Ciências", professor: "Prof. Daniel" },
            "11h10-12h00": { materia: "Educação Física", professor: "Prof. Fernando" },
            "12h00-12h50": { materia: "Geografia", professor: "Prof. Eva" }
        }
    };

    gradesHorarias['1º DS'] = {
        "Segunda-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        },
        "Terça-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        },
        "Quarta-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        },
        "Quinta-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        },
        "Sexta-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        }
    };
    gradesHorarias['1º BIO'] = {
        "Segunda-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        },
        "Terça-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        },
        "Quarta-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        },
        "Quinta-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        },
        "Sexta-feira": {
            "7h30-8h20": { materia: "-", professor: "" },
            "8h20-9h10": { materia: "-", professor: "" },
            "9h10-10h00": { materia: "-", professor: "" },
            "10h20-11h10": { materia: "-", professor: "" },
            "11h10-12h00": { materia: "-", professor: "" },
            "12h00-12h50": { materia: "-", professor: "" }
        }
    };
}

// Função para carregar faltas do localStorage
function carregarFaltas() {
    const faltasSalvas = localStorage.getItem('faltasProfessores');
    if (faltasSalvas) {
        const faltasObj = JSON.parse(faltasSalvas);
        faltasProfessores = {};
        
        Object.entries(faltasObj).forEach(([professor, dias]) => {
            faltasProfessores[professor] = new Set(dias);
        });
    }
}

// Função para salvar faltas no localStorage
function salvarFaltas() {
    const faltasObj = {};
    Object.entries(faltasProfessores).forEach(([professor, diasSet]) => {
        faltasObj[professor] = Array.from(diasSet);
    });
    localStorage.setItem('faltasProfessores', JSON.stringify(faltasObj));
}

// Função para mostrar notificação
function mostrarNotificacao(mensagem, tipo = 'info') {
    // Criar container se não existir
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
        `;
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensagem;
    toast.style.cssText = `
        background: ${tipo === 'success' ? '#4CAF50' : tipo === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 12px 20px;
        margin-bottom: 10px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    
    container.appendChild(toast);
    
    // Remover após 3 segundos
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 3000);
}

// Função principal de inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando sistema...');
    
    // Inicializar dados
    inicializarGrades();
    carregarFaltas();
    
    // Verificar qual página estamos
    const currentPage = window.location.pathname.split('/').pop();
    console.log('Página atual:', currentPage);
    
    if (currentPage === 'index.html' || currentPage === '') {
        // Página inicial - configurar botões de seleção de usuário
        configurarPaginaInicial();
    } else if (currentPage === 'login.html') {
        // Página de login - configurar formulário de login
        configurarPaginaLogin();
    } else if (currentPage === 'grade.html') {
        // Página da grade - configurar interface da grade
        configurarPaginaGrade();
    }
});

// Configurar página inicial
function configurarPaginaInicial() {
    console.log('Configurando página inicial...');
    
    const alunoBtn = document.getElementById('alunoBtn');
    const pedagogoBtn = document.getElementById('pedagogoBtn');
    
    if (alunoBtn) {
        alunoBtn.addEventListener('click', function() {
            console.log('Botão aluno clicado');
            // Redirecionar para seleção de turma
            window.location.href = 'grade.html?tipo=aluno';
        });
    }
    
    if (pedagogoBtn) {
        pedagogoBtn.addEventListener('click', function() {
            console.log('Botão pedagogo clicado');
            // Redirecionar para login
            window.location.href = 'login.html';
        });
    }
}

// Configurar página de login
function configurarPaginaLogin() {
    console.log('Configurando página de login...');
    
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = usernameInput ? usernameInput.value : '';
            const password = passwordInput ? passwordInput.value : '';
            
            console.log('Tentativa de login:', username);
            
            // Validar credenciais
            if (username === 'pedagogo' && password === '123456') {
                console.log('Login bem-sucedido');
                // Redirecionar para grade do pedagogo
                window.location.href = 'grade.html?tipo=pedagogo';
            } else {
                console.log('Login falhou');
                mostrarNotificacao('Usuário ou senha incorretos!', 'error');
            }
        });
    }
}

// Configurar página da grade
function configurarPaginaGrade() {
    console.log('Configurando página da grade...');
    
    // Obter parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get('tipo');
    const turma = urlParams.get('turma');
    
    console.log('Tipo de usuário:', tipo);
    console.log('Turma selecionada:', turma);
    
    tipoUsuario = tipo;
    turmaAtual = turma;
    
    if (tipo === 'aluno') {
        configurarInterfaceAluno();
    } else if (tipo === 'pedagogo') {
        configurarInterfacePedagogo();
    } else {
        // Se não há tipo definido, mostrar seleção
        mostrarSelecaoTurma();
    }
}

// Configurar interface do aluno
function configurarInterfaceAluno() {
    console.log('Configurando interface do aluno...');
    
    // Esconder funções do pedagogo
    const funcoesPedagogo = document.getElementById('pedagogoFunctionsTop');
    if (funcoesPedagogo) {
        funcoesPedagogo.style.display = 'none';
    }
    
    // Mostrar informações do usuário
    const userInfo = document.getElementById('userInfo');
    if (userInfo) {
        userInfo.textContent = 'Aluno';
    }
    
    if (turmaAtual) {
        // Mostrar grade da turma específica
        exibirGradeHoraria(turmaAtual);
    } else {
        // Mostrar seleção de turma
        mostrarSelecaoTurma();
    }
}

// Configurar interface do pedagogo
function configurarInterfacePedagogo() {
    console.log('Configurando interface do pedagogo...');
    
    // Mostrar funções do pedagogo
    const funcoesPedagogo = document.getElementById('pedagogoFunctionsTop');
    if (funcoesPedagogo) {
        funcoesPedagogo.style.display = 'block';
    }
    
    // Mostrar informações do usuário
    const userInfo = document.getElementById('userInfo');
    if (userInfo) {
        userInfo.textContent = 'Pedagogo - Logado';
    }
    
    // Mostrar botão de logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.style.display = 'block';
        logoutBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // Configurar modais
    configurarModais();
    
    // Mostrar seleção de turma ou grade específica
    if (turmaAtual) {
        exibirGradeHoraria(turmaAtual);
    } else {
        mostrarSelecaoTurma();
    }
}

// Mostrar seleção de turma
function mostrarSelecaoTurma() {
    console.log('Mostrando seleção de turma...');
    
    const turmasContainer = document.getElementById('turmaButtons');
    if (!turmasContainer) {
        console.error('Container de turmas não encontrado');
        return;
    }
    
    // Esconder grade horária
    const gradeContainer = document.getElementById('gradeHoraria');
    if (gradeContainer) {
        gradeContainer.style.display = 'none';
    }
    
    // Mostrar sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.display = 'block';
    }
    
    // Limpar container e adicionar título
    turmasContainer.innerHTML = '';
    turmasContainer.style.display = 'block';
    
    // Criar seções por período
    const periodos = [
        { nome: 'Manhã', turmas: turmas.manha, cor: '#4CAF50' },
        { nome: 'Tarde', turmas: turmas.tarde, cor: '#FF9800' },
        { nome: 'Noite', turmas: turmas.noite, cor: '#9C27B0' }
    ];
    
    periodos.forEach(periodo => {
        // Criar título do período
        const tituloSecao = document.createElement('h4');
        tituloSecao.textContent = `Turmas da ${periodo.nome}`;
        tituloSecao.style.cssText = `
            color: ${periodo.cor};
            margin: 1.5rem 0 0.5rem 0;
            font-weight: 600;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        `;
        turmasContainer.appendChild(tituloSecao);
        
        // Criar botões das turmas
        periodo.turmas.forEach(turma => {
            const button = document.createElement('button');
            button.textContent = turma;
            button.className = 'turma-btn';
            button.style.cssText = `
                display: block;
                width: 100%;
                margin: 0.5rem 0;
                padding: 0.75rem 1rem;
                background: var(--background-color);
                color: var(--text-primary);
                border: 1px solid var(--border-color);
                border-radius: var(--radius);
                cursor: pointer;
                font-weight: 500;
                transition: all 0.3s ease;
                text-align: left;
            `;
            
            button.addEventListener('mouseover', () => {
                button.style.background = periodo.cor;
                button.style.color = 'white';
                button.style.transform = 'translateX(4px)';
            });
            
            button.addEventListener('mouseout', () => {
                button.style.background = 'var(--background-color)';
                button.style.color = 'var(--text-primary)';
                button.style.transform = 'translateX(0)';
            });
            
            button.addEventListener('click', () => {
                console.log('Turma selecionada:', turma);
                turmaAtual = turma;
                
                // Atualizar URL
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('turma', turma);
                window.history.pushState({}, '', newUrl);
                
                // Exibir grade
                exibirGradeHoraria(turma);
            });
            
            turmasContainer.appendChild(button);
        });
    });
    
    // Configurar busca de turmas
    const searchInput = document.getElementById('searchTurma');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const termo = this.value.toLowerCase();
            const botoesTurma = turmasContainer.querySelectorAll('.turma-btn');
            
            botoesTurma.forEach(botao => {
                const nomeTurma = botao.textContent.toLowerCase();
                if (nomeTurma.includes(termo)) {
                    botao.style.display = 'block';
                } else {
                    botao.style.display = 'none';
                }
            });
        });
    }
}

// Exibir grade horária
function exibirGradeHoraria(turma) {
    console.log('Exibindo grade horária para:', turma);
    
    const gradeContainer = document.getElementById('gradeHoraria');
    if (!gradeContainer) {
        console.error('Container da grade não encontrado');
        return;
    }
    
    // Esconder seleção de turmas
    const turmasContainer = document.getElementById('turmaButtons');
    if (turmasContainer) {
        turmasContainer.style.display = 'none';
    }
    
    // Mostrar container da grade
    gradeContainer.style.display = 'block';
    
    // Atualizar título
    const titulo = document.getElementById('turmaTitle');
    if (titulo) {
        titulo.textContent = `Grade Horária - ${turma}`;
    }
    
    // Criar seletor de dias (apenas para alunos)
    if (tipoUsuario === 'aluno') {
        criarSeletorDias();
    } else {
        // Para pedagogos, esconder o calendário
        const alunoCalendar = document.getElementById('alunoCalendar');
        if (alunoCalendar) {
            alunoCalendar.style.display = 'none';
        }
    }
    
    // Criar tabela da grade
    criarTabelaGrade(turma);
    
    // Aplicar faltas visuais
    setTimeout(() => {
        atualizarVisualFaltas();
    }, 100);
    
    // Adicionar botão de voltar
    adicionarBotaoVoltar();
}

// Adicionar botão de voltar
function adicionarBotaoVoltar() {
    const gradeHeader = document.getElementById('gradeHeader');
    if (!gradeHeader) return;
    
    // Verificar se já existe
    if (gradeHeader.querySelector('.btn-voltar')) return;
    
    const btnVoltar = document.createElement('button');
    btnVoltar.className = 'btn-voltar btn-icon';
    btnVoltar.innerHTML = '← Voltar';
    btnVoltar.title = 'Voltar para seleção de turmas';
    btnVoltar.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.3s ease;
    `;
    
    btnVoltar.addEventListener('mouseover', () => {
        btnVoltar.style.background = 'rgba(255, 255, 255, 0.3)';
        btnVoltar.style.transform = 'translateY(-2px)';
    });
    
    btnVoltar.addEventListener('mouseout', () => {
        btnVoltar.style.background = 'rgba(255, 255, 255, 0.2)';
        btnVoltar.style.transform = 'translateY(0)';
    });
    
    btnVoltar.addEventListener('click', () => {
        turmaAtual = '';
        
        // Atualizar URL
        const newUrl = new URL(window.location);
        newUrl.searchParams.delete('turma');
        window.history.pushState({}, '', newUrl);
        
        // Mostrar seleção de turmas
        mostrarSelecaoTurma();
    });
    
    const gradeActions = gradeHeader.querySelector('.grade-actions');
    if (gradeActions) {
        gradeActions.insertBefore(btnVoltar, gradeActions.firstChild);
    }
}

// Criar seletor de dias
function criarSeletorDias() {
    const seletorContainer = document.getElementById('alunoCalendar');
    if (!seletorContainer) return;
    
    seletorContainer.style.display = 'block';
    
    const botoesDia = seletorContainer.querySelectorAll('.day-btn');
    
    botoesDia.forEach(button => {
        const dia = button.dataset.day;
        
        // Remover listeners anteriores
        button.removeEventListener('click', handleDayClick);
        
        // Adicionar novo listener
        button.addEventListener('click', handleDayClick);
        
        if (dia === diaAtual) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function handleDayClick(e) {
    const button = e.currentTarget;
    const dia = button.dataset.day;
    
    // Remover classe ativo de todos os botões
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Adicionar classe ativo ao botão clicado
    button.classList.add('active');
    
    // Atualizar dia atual
    diaAtual = dia;
    
    // Atualizar destaque da grade
    atualizarDestaqueDia();
}

// Atualizar destaque do dia na grade
function atualizarDestaqueDia() {
    console.log('Atualizando destaque do dia:', diaAtual);
    
    const gradeTable = document.getElementById('gradeTable');
    if (!gradeTable) return;
    
    // Remover destaque anterior
    gradeTable.querySelectorAll('.dia-destacado').forEach(cell => {
        cell.classList.remove('dia-destacado');
    });
    
    // Encontrar índice do dia atual
    const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    const indiceDia = diasSemana.indexOf(diaAtual);
    
    if (indiceDia === -1) return;
    
    // Destacar cabeçalho do dia
    const headerRow = gradeTable.querySelector('tr');
    if (headerRow) {
        const headerCells = headerRow.querySelectorAll('th');
        if (headerCells[indiceDia + 1]) { // +1 porque a primeira coluna é de horários
            headerCells[indiceDia + 1].classList.add('dia-destacado');
        }
    }
    
    // Destacar todas as células da coluna do dia
    const rows = gradeTable.querySelectorAll('tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells[indiceDia + 1]) { // +1 porque a primeira coluna é de horários
            cells[indiceDia + 1].classList.add('dia-destacado');
        }
    });
}

// Criar tabela da grade
function criarTabelaGrade(turma) {
    const tabelaContainer = document.getElementById('gradeTableBody');
    if (!tabelaContainer) return;
    
    const gradeTurma = gradesHorarias[turma];
    if (!gradeTurma) {
        const infoBox = document.getElementById('infoBox');
        if (infoBox) {
            infoBox.style.display = 'block';
        }
        tabelaContainer.innerHTML = '<tr><td colspan="6">Grade horária não encontrada para esta turma.</td></tr>';
        return;
    }
    
    // Esconder info box se a grade existe
    const infoBox = document.getElementById('infoBox');
    if (infoBox) {
        infoBox.style.display = 'none';
    }
    
    // Determinar horários da turma
    let horariosParaTurma = [];
    if (turmas.manha.includes(turma)) {
        horariosParaTurma = horarios.manha;
    } else if (turmas.tarde.includes(turma)) {
        horariosParaTurma = horarios.tarde;
    } else if (turmas.noite.includes(turma)) {
        horariosParaTurma = horarios.noite;
    }
    
    const dias = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    
    // Criar cabeçalho da tabela
    let html = '<tr><th>Horário</th>';
    dias.forEach(dia => {
        html += `<th class="dia-header" data-dia="${dia}">${dia}</th>`;
    });
    html += '</tr>';
    
    // Corpo da tabela
    horariosParaTurma.forEach(horario => {
        html += `<tr><td class="horario-cell">${horario}</td>`;
        
        dias.forEach(dia => {
            const aula = gradeTurma[dia] && gradeTurma[dia][horario];
            
            if (aula) {
                html += `<td class="aula-cell" data-dia="${dia}" data-professor="${aula.professor}">
                    <div class="materia">${aula.materia}</div>
                    <div class="professor">${aula.professor}</div>
                </td>`;
            } else {
                html += `<td class="aula-cell vazia" data-dia="${dia}">--</td>`;
            }
        });
        
        html += '</tr>';
    });
    
    tabelaContainer.innerHTML = html;
    
    // Aplicar destaque inicial do dia
    setTimeout(() => {
        atualizarDestaqueDia();
    }, 100);
}

// Atualizar destaque do dia
function atualizarDestaqueDia() {
    // Remover destaque anterior
    document.querySelectorAll('.dia-destacado').forEach(el => {
        el.classList.remove('dia-destacado');
    });
    
    // Adicionar destaque ao dia atual
    document.querySelectorAll(`[data-dia="${diaAtual}"]`).forEach(el => {
        el.classList.add('dia-destacado');
    });
}

// Configurar modais
function configurarModais() {
    console.log('Configurando modais...');
    
    // Configurar botões das funções
    const marcarFaltasBtn = document.getElementById('marcarFaltasBtn');
    const removerFaltasBtn = document.getElementById('removerFaltasBtn');
    const editarHorariosBtn = document.getElementById('editarHorariosBtn');
    const trocarUsuarioBtn = document.getElementById('trocarUsuarioBtn');
    
    // Modal de marcar faltas
    const modalMarcarFalta = document.getElementById('modalMarcarFalta');
    const closeMarcarFalta = document.getElementById('closeMarcarFalta');
    const confirmarMarcarFalta = document.getElementById('confirmarMarcarFalta');
    
    // Modal de remover faltas
    const modalRemoverFalta = document.getElementById('modalRemoverFalta');
    const closeRemoverFalta = document.getElementById('closeRemoverFalta');
    const confirmarRemoverFalta = document.getElementById('confirmarRemoverFalta');
    
    // Modal de editar horários
    const modalEditarHorarios = document.getElementById('modalEditarHorarios');
    const closeEditarHorarios = document.getElementById('closeEditarHorarios');
    const confirmarEditarHorario = document.getElementById('confirmarEditarHorario');
    
    // Abrir modais
    if (marcarFaltasBtn) {
        marcarFaltasBtn.addEventListener('click', () => {
            preencherProfessoresModal('professorFaltaModal');
            modalMarcarFalta.style.display = 'block';
        });
    }
    
    if (removerFaltasBtn) {
        removerFaltasBtn.addEventListener('click', () => {
            preencherProfessoresModal('professorRemoverFaltaModal');
            modalRemoverFalta.style.display = 'block';
        });
    }
    
    if (editarHorariosBtn) {
        editarHorariosBtn.addEventListener('click', () => {
            preencherTurmasModal();
            modalEditarHorarios.style.display = 'block';
        });
    }
    
    if (trocarUsuarioBtn) {
        trocarUsuarioBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    // Fechar modais
    if (closeMarcarFalta) {
        closeMarcarFalta.addEventListener('click', () => {
            modalMarcarFalta.style.display = 'none';
        });
    }
    
    if (closeRemoverFalta) {
        closeRemoverFalta.addEventListener('click', () => {
            modalRemoverFalta.style.display = 'none';
        });
    }
    
    if (closeEditarHorarios) {
        closeEditarHorarios.addEventListener('click', () => {
            modalEditarHorarios.style.display = 'none';
        });
    }
    
    // Confirmar ações
    if (confirmarMarcarFalta) {
        confirmarMarcarFalta.addEventListener('click', () => {
            const professor = document.getElementById('professorFaltaModal').value;
            const dia = document.getElementById('diaFaltaModal').value;
            
            if (professor && dia) {
                marcarFaltaProfessor(professor, dia);
                modalMarcarFalta.style.display = 'none';
                // Limpar campos
                document.getElementById('professorFaltaModal').value = '';
                document.getElementById('diaFaltaModal').value = 'Segunda-feira';
            } else {
                mostrarNotificacao('Por favor, selecione o professor e o dia.', 'error');
            }
        });
    }
    
    if (confirmarRemoverFalta) {
        confirmarRemoverFalta.addEventListener('click', () => {
            const professor = document.getElementById('professorRemoverFaltaModal').value;
            const dia = document.getElementById('diaRemoverFaltaModal').value;
            
            if (professor && dia) {
                removerFaltaProfessor(professor, dia);
                modalRemoverFalta.style.display = 'none';
                // Limpar campos
                document.getElementById('professorRemoverFaltaModal').value = '';
                document.getElementById('diaRemoverFaltaModal').value = 'Segunda-feira';
            } else {
                mostrarNotificacao('Por favor, selecione o professor e o dia.', 'error');
            }
        });
    }
    
    if (confirmarEditarHorario) {
        confirmarEditarHorario.addEventListener('click', () => {
            const turma = document.getElementById('turmaEditarModal').value;
            const dia = document.getElementById('diaEditarModal').value;
            const horario = document.getElementById('horarioEditarModal').value;
            const novaMateria = document.getElementById('novaMateriaModal').value;
            const novoProfessor = document.getElementById('novoProfessorModal').value;
            
            if (turma && dia && horario && novaMateria && novoProfessor) {
                editarHorario(turma, dia, horario, novaMateria, novoProfessor);
                modalEditarHorarios.style.display = 'none';
                // Limpar campos
                document.getElementById('turmaEditarModal').value = '';
                document.getElementById('diaEditarModal').value = 'Segunda-feira';
                document.getElementById('horarioEditarModal').value = '';
                document.getElementById('novaMateriaModal').value = '';
                document.getElementById('novoProfessorModal').value = '';
            } else {
                mostrarNotificacao('Por favor, preencha todos os campos.', 'error');
            }
        });
    }
    
    // Fechar modal clicando fora
    window.addEventListener('click', (e) => {
        if (e.target === modalMarcarFalta) {
            modalMarcarFalta.style.display = 'none';
        }
        if (e.target === modalRemoverFalta) {
            modalRemoverFalta.style.display = 'none';
        }
        if (e.target === modalEditarHorarios) {
            modalEditarHorarios.style.display = 'none';
        }
    });
}

// Preencher professores no modal
function preencherProfessoresModal(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    // Limpar opções existentes
    select.innerHTML = '<option value="">Escolha um professor</option>';
    
    // Coletar todos os professores únicos
    const professores = new Set();
    Object.values(gradesHorarias).forEach(gradeTurma => {
        Object.values(gradeTurma).forEach(gradesDia => {
            Object.values(gradesDia).forEach(aula => {
                if (aula.professor) {
                    professores.add(aula.professor);
                }
            });
        });
    });
    
    // Adicionar professores ao select
    Array.from(professores).sort().forEach(professor => {
        const option = document.createElement('option');
        option.value = professor;
        option.textContent = professor;
        select.appendChild(option);
    });
}

// Preencher turmas no modal
function preencherTurmasModal() {
    const select = document.getElementById('turmaEditarModal');
    if (!select) return;
    
    // Limpar opções existentes
    select.innerHTML = '<option value="">Selecione a turma</option>';
    
    // Adicionar todas as turmas
    Object.values(turmas).flat().forEach(turma => {
        const option = document.createElement('option');
        option.value = turma;
        option.textContent = turma;
        select.appendChild(option);
    });
    
    // Configurar mudança de turma para atualizar horários
    select.addEventListener('change', function() {
        const turmaSelecionada = this.value;
        preencherHorariosModal(turmaSelecionada);
    });
}

// Preencher horários no modal
function preencherHorariosModal(turma) {
    const select = document.getElementById('horarioEditarModal');
    if (!select || !turma) return;
    
    // Limpar opções existentes
    select.innerHTML = '<option value="">Selecione o horário</option>';
    
    // Determinar horários da turma
    let horariosParaTurma = [];
    if (turmas.manha.includes(turma)) {
        horariosParaTurma = horarios.manha;
    } else if (turmas.tarde.includes(turma)) {
        horariosParaTurma = horarios.tarde;
    } else if (turmas.noite.includes(turma)) {
        horariosParaTurma = horarios.noite;
    }
    
    // Adicionar horários ao select
    horariosParaTurma.forEach(horario => {
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        select.appendChild(option);
    });
}

// Marcar falta do professor
function marcarFaltaProfessor(professor, dia) {
    if (!faltasProfessores[professor]) {
        faltasProfessores[professor] = new Set();
    }
    
    faltasProfessores[professor].add(dia);
    salvarFaltas();
    atualizarVisualFaltas();
    mostrarNotificacao(`Falta marcada para ${professor} na ${dia}`, 'success');
}

// Remover falta do professor
function removerFaltaProfessor(professor, dia) {
    if (faltasProfessores[professor]) {
        faltasProfessores[professor].delete(dia);
        
        // Se não há mais faltas, remover o professor
        if (faltasProfessores[professor].size === 0) {
            delete faltasProfessores[professor];
        }
    }
    
    salvarFaltas();
    atualizarVisualFaltas();
    mostrarNotificacao(`Falta removida para ${professor} na ${dia}`, 'success');
}

// Editar horário
function editarHorario(turma, dia, horario, novaMateria, novoProfessor) {
    if (!gradesHorarias[turma]) {
        gradesHorarias[turma] = {};
    }
    
    if (!gradesHorarias[turma][dia]) {
        gradesHorarias[turma][dia] = {};
    }
    
    gradesHorarias[turma][dia][horario] = {
        materia: novaMateria,
        professor: novoProfessor
    };
    
    // Atualizar a grade se estiver sendo exibida
    if (turmaAtual === turma) {
        criarTabelaGrade(turma);
    }
    
    mostrarNotificacao(`Horário atualizado para ${turma} - ${dia} ${horario}`, 'success');
}

// Atualizar visual das faltas
function atualizarVisualFaltas() {
    // Remover classe de falta de todas as células
    document.querySelectorAll('.aula-cell').forEach(cell => {
        cell.classList.remove('falta');
    });
    
    // Aplicar classe de falta onde necessário
    Object.entries(faltasProfessores).forEach(([professor, diasSet]) => {
        diasSet.forEach(dia => {
            const cells = document.querySelectorAll(`[data-professor="${professor}"][data-dia="${dia}"]`);
            cells.forEach(cell => {
                cell.classList.add('falta');
            });
        });
    });
}