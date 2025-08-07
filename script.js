// Dados das turmas e horários
const horarios = {
    manha: ["7h30-8h20", "8h20-9h10", "9h10-10h00", "10h20-11h10", "11h10-12h00", "12h00-12h50"],
    tarde: ["13h30-14h20", "14h20-15h10", "15h10-16h00", "16h20-17h10", "17h10-18h00", "18h00-18h30"],
    noite: ["18h40-19h40", "19h40-20h30", "20h30-21h30", "21h30-22h10", "22h10-23h00"]
};

// Dados das turmas
const turmas = {
    manha: [
        "Turma 1° ADM", "Turma 1° PORTOS", "Turma 1° DS", "Turma 1° BIO",
        "Turma 2° ADM", "Turma 2° PORTOS", "Turma 2° DS", "Turma 2° BIO",
        "Turma 3° ADM", "Turma 3° PORTOS", "Turma 3° DS", "Turma 3° A"
    ],
    tarde: [
        "Turma 1° A", "Turma 1° B", "Turma 1° C", "Turma 1° Adm",
        "Turma 1° Portos", "Turma 2° A", "Turma 2° B", "Turma 2° C",
        "Turma 2° D", "Turma 3° B", "Turma 3° C", "Turma 3° D"
    ],
    noite: [
        "Turma 1° STA", "Turma 1° STB", "Turma 2° STA", "Turma 3° STA",
        "Turma 3° STB", "Turma 1° COMEX", "Turma 2° A PORTOS", "Turma 3° A PORTOS"
    ]
};

// Dados das grades horárias (exemplo)
const gradesHorarias = {};

// Inicializar grades horárias com dados de exemplo
function inicializarGrades() {
    // Definir as grades horárias manualmente para as turmas desejadas

    // Exemplo para a Turma 1A (Manhã)
    gradesHorarias["Turma 1° ADM"] = {
        "Segunda-feira": {
            "7h30-8h20": { materia: "Arte", professor: "Prof. André" },
            "8h20-9h10": { materia: "Língua Inglesa", professor: "Prof. Deise" },
            "9h10-10h00": { materia: "História", professor: "Prof. Ana Cristina" },
            "10h20-11h10": { materia: "Biologia", professor: "Prof. Sérgio Tramujas" },
            "11h10-12h00": { materia: "Língua Inglesa", professor: "Prof. Deise" },
            "12h00-12h50": { materia: "História", professor: "Prof. Ana Cristina" }
        },
        "Terça-feira": {
            "7h30-8h20": { materia: "Geografia", professor: "Prof. Adélio" },
            "8h20-9h10": { materia: "Arte", professor: "Prof. André" },
            "9h10-10h00": { materia: "Projeto de vida", professor: "Prof. Ana Cristina" },
            "10h20-11h10": { materia: "Ed. Física", professor: "Prof. Juciane" },
            "11h10-12h00": { materia: "Ed. Física", professor: "Prof. Juciane" },
            "12h00-12h50": { materia: "Língua Portuguesa", professor: "Prof. Raquel" }
        },
        "Quarta-feira": {
            "7h30-8h20": { materia: "Biologia", professor: "Prof. Sérgio Tramujas" },
            "8h20-9h10": { materia: "Matemática", professor: "Prof. Claudia" },
            "9h10-10h00": { materia: "Física", professor: "Prof. Ana Claudia" },
            "10h20-11h10": { materia: "Física", professor: "Prof. Ana Claudia" },
            "11h10-12h00": { materia: "Geografia", professor: "Prof. Daniel" },
            "12h00-12h50": { materia: "Matemática", professor: "Prof. Claudia" }
        },
        "Quinta-feira": {
            "7h30-8h20": { materia: "Língua Portuguesa", professor: "Prof. Raquel" },
            "8h20-9h10": { materia: "Língua Portuguesa", professor: "Prof. Raquel" },
            "9h10-10h00": { materia: "Química", professor: "Prof. Marcelo Vella" },
            "10h20-11h10": { materia: "PrAdm", professor: "Prof. Ricardo" },
            "11h10-12h00": { materia: "Projeto de vida", professor: "Prof. Ana Cristina" },
            "12h00-12h50": { materia: "Química", professor: "Prof. Marcelo Vella" }
        },
        "Sexta-feira": {
            "7h30-8h20": { materia: "Matemática", professor: "Prof. Claudia" },
            "8h20-9h10": { materia: "Filosofia", professor: "Prof. Maicon Keht" },
            "9h10-10h00": { materia: "Ed. Financeira", professor: "Prof. Carlos" },
            "10h20-11h10": { materia: "C e V", professor: "Prof. Marcos Souza" },
            "11h10-12h00": { materia: "Filosofia", professor: "Prof. Maicon Keht" },
            "12h00-12h50": { materia: "PrAdm", professor: "Prof. Ricardo" }
        }
    };

    // Exemplo para a Turma 1B (Manhã)
    gradesHorarias["Turma 1B"] = {
        "Segunda-feira": {
            "7h30-8h20": { materia: "Matemática", professor: "Prof. Carlos" },
            "8h20-9h10": { materia: "Português", professor: "Prof. Ana" },
            "9h10-10h00": { materia: "Ciências", professor: "Prof. Daniel" },
            "10h20-11h10": { materia: "História", professor: "Prof. Beatriz" },
            "11h10-12h00": { materia: "Educação Física", professor: "Prof. Fernando" },
            "12h00-12h50": { materia: "Geografia", professor: "Prof. Eva" }
        },
        "Terça-feira": {
            "7h30-8h20": { materia: "Português", professor: "Prof. Ana" },
            "8h20-9h10": { materia: "Matemática", professor: "Prof. Carlos" },
            "9h10-10h00": { materia: "História", professor: "Prof. Beatriz" },
            "10h20-11h10": { materia: "Ciências", professor: "Prof. Daniel" },
            "11h10-12h00": { materia: "Geografia", professor: "Prof. Eva" },
            "12h00-12h50": { materia: "Educação Física", professor: "Prof. Fernando" }
        },
        "Quarta-feira": {
            "7h30-8h20": { materia: "Ciências", professor: "Prof. Daniel" },
            "8h20-9h10": { materia: "História", professor: "Prof. Beatriz" },
            "9h10-10h00": { materia: "Português", professor: "Prof. Ana" },
            "10h20-11h10": { materia: "Matemática", professor: "Prof. Carlos" },
            "11h10-12h00": { materia: "Geografia", professor: "Prof. Eva" },
            "12h00-12h50": { materia: "Educação Física", professor: "Prof. Fernando" }
        },
        "Quinta-feira": {
            "7h30-8h20": { materia: "História", professor: "Prof. Beatriz" },
            "8h20-9h10": { materia: "Geografia", professor: "Prof. Eva" },
            "9h10-10h00": { materia: "Ciências", professor: "Prof. Daniel" },
            "10h20-11h10": { materia: "Educação Física", professor: "Prof. Fernando" },
            "11h10-12h00": { materia: "Português", professor: "Prof. Ana" },
            "12h00-12h50": { materia: "Matemática", professor: "Prof. Carlos" }
        },
        "Sexta-feira": {
            "7h30-8h20": { materia: "Geografia", professor: "Prof. Eva" },
            "8h20-9h10": { materia: "Ciências", professor: "Prof. Daniel" },
            "9h10-10h00": { materia: "Educação Física", professor: "Prof. Fernando" },
            "10h20-11h10": { materia: "História", professor: "Prof. Beatriz" },
            "11h10-12h00": { materia: "Matemática", professor: "Prof. Carlos" },
            "12h00-12h50": { materia: "Português", professor: "Prof. Ana" }
        }
    };
}

// Dados de faltas dos professores
let faltasProfessores = {};

// Estado da aplicação
let usuarioLogado = false;
let tipoUsuario = '';
let turmaSelecionada = '';
let diaSelecionado = 'Segunda-feira'; // Dia padrão para alunos

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    inicializarGrades();
    
    // Verificar qual página está sendo carregada
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        inicializarPaginaInicial();
    } else if (window.location.pathname.includes('login.html')) {
        inicializarPaginaLogin();
    } else if (window.location.pathname.includes('grade.html')) {
        inicializarPaginaGrade();
    }
});

// Página inicial
function inicializarPaginaInicial() {
    const alunoBtn = document.getElementById('alunoBtn');
    const pedagogoBtn = document.getElementById('pedagogoBtn');

    alunoBtn.addEventListener('click', function() {
        tipoUsuario = 'aluno';
        mostrarSelecaoTurma();
    });

    pedagogoBtn.addEventListener('click', function() {
        tipoUsuario = 'pedagogo';
        window.location.href = 'login.html';
    });
}

function mostrarSelecaoTurma() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>Selecione sua Turma</h1>
        <div class="turma-selection">
            <h3>Manhã</h3>
            ${turmas.manha.map(turma => `<button onclick="selecionarTurma('${turma}')">${turma}</button>`).join('')}
            <h3>Tarde</h3>
            ${turmas.tarde.map(turma => `<button onclick="selecionarTurma('${turma}')">${turma}</button>`).join('')}
            <h3>Noite</h3>
            ${turmas.noite.map(turma => `<button onclick="selecionarTurma('${turma}')">${turma}</button>`).join('')}
        </div>
    `;
}

function selecionarTurma(turma) {
    turmaSelecionada = turma;
    localStorage.setItem('turmaSelecionada', turma);
    localStorage.setItem('tipoUsuario', tipoUsuario);
    window.location.href = 'grade.html';
}

// Página de login
function inicializarPaginaLogin() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validação simples (em um sistema real, isso seria feito no servidor)
        if (username === 'pedagogo' && password === '123456') {
            usuarioLogado = true;
            tipoUsuario = 'pedagogo';
            localStorage.setItem('usuarioLogado', 'true');
            localStorage.setItem('tipoUsuario', 'pedagogo');
            window.location.href = 'grade.html';
        } else {
            loginError.textContent = 'Usuário ou senha incorretos!';
        }
    });
}

// Página da grade horária
function inicializarPaginaGrade() {
    // Recuperar dados do localStorage
    usuarioLogado = localStorage.getItem('usuarioLogado') === 'true';
    tipoUsuario = localStorage.getItem('tipoUsuario');
    turmaSelecionada = localStorage.getItem('turmaSelecionada');

    configurarInterface();
    criarBotoesTurmas();
    configurarEventos();
    configurarDatasCalendario();

    if (turmaSelecionada) {
        exibirGradeHoraria(turmaSelecionada);
    }
}

function configurarInterface() {
    const userInfo = document.getElementById('userInfo');
    const logoutBtn = document.getElementById('logoutBtn');
    const pedagogoFunctionsTop = document.getElementById('pedagogoFunctionsTop');
    const alunoCalendar = document.getElementById('alunoCalendar');
    const pedagogoInfo = document.getElementById('pedagogoInfo');

    if (tipoUsuario === 'pedagogo' && usuarioLogado) {
        userInfo.textContent = 'Pedagogo Logado';
        logoutBtn.style.display = 'block';
        pedagogoFunctionsTop.style.display = 'block';
        pedagogoInfo.style.display = 'block';
        preencherSelectsTurmasEHorarios();
        atualizarResumoDia();
    } else if (tipoUsuario === 'aluno') {
        userInfo.textContent = 'Aluno';
        alunoCalendar.style.display = 'block';
        configurarSeletorDias();
    }
}

function configurarDatasCalendario() {
    if (tipoUsuario === 'aluno') {
        const hoje = new Date();
        const diasSemana = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
        
        // Encontrar a segunda-feira da semana atual
        const diaSemana = hoje.getDay();
        const diasParaSegunda = diaSemana === 0 ? -6 : 1 - diaSemana;
        const segundaFeira = new Date(hoje);
        segundaFeira.setDate(hoje.getDate() + diasParaSegunda);

        // Atualizar as datas nos botões
        for (let i = 0; i < 5; i++) {
            const data = new Date(segundaFeira);
            data.setDate(segundaFeira.getDate() + i);
            const elemento = document.getElementById(`${diasSemana[i]}-date`);
            if (elemento) {
                elemento.textContent = `${data.getDate()}/${data.getMonth() + 1}`;
            }
        }
    }
}

function configurarSeletorDias() {
    const dayButtons = document.querySelectorAll('.day-btn');
    
    dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            dayButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Atualizar dia selecionado
            diaSelecionado = this.getAttribute('data-day');
            
            // Atualizar grade horária se uma turma estiver selecionada
            if (turmaSelecionada) {
                exibirGradeHoraria(turmaSelecionada);
            }
        });
    });
}

function criarBotoesTurmas() {
    const turmaButtons = document.getElementById('turmaButtons');
    let buttonsHTML = '';

    if (tipoUsuario === 'pedagogo' && usuarioLogado) {
        // Pedagogo pode ver todas as turmas
        buttonsHTML += '<h4>Manhã</h4>';
        turmas.manha.forEach(turma => {
            buttonsHTML += `<button onclick="exibirGradeHoraria('${turma}')">${turma}</button>`;
        });
        buttonsHTML += '<h4>Tarde</h4>';
        turmas.tarde.forEach(turma => {
            buttonsHTML += `<button onclick="exibirGradeHoraria('${turma}')">${turma}</button>`;
        });
        buttonsHTML += '<h4>Noite</h4>';
        turmas.noite.forEach(turma => {
            buttonsHTML += `<button onclick="exibirGradeHoraria('${turma}')">${turma}</button>`;
        });
    } else if (tipoUsuario === 'aluno' && turmaSelecionada) {
        // Aluno só vê sua turma
        buttonsHTML += `<button onclick="exibirGradeHoraria('${turmaSelecionada}')" class="selected">${turmaSelecionada}</button>`;
    }

    turmaButtons.innerHTML = buttonsHTML;
    
    // Configurar busca de turmas
    configurarBuscaTurmas();
}

function configurarBuscaTurmas() {
    const searchInput = document.getElementById('searchTurma');
    if (searchInput && tipoUsuario === 'pedagogo') {
        searchInput.addEventListener('input', function() {
            const termo = this.value.toLowerCase();
            const botoes = document.querySelectorAll('#turmaButtons button');
            
            botoes.forEach(botao => {
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

function configurarEventos() {
    const logoutBtn = document.getElementById('logoutBtn');
    const marcarFaltaBtn = document.getElementById('marcarFaltaBtn');
    const removerFaltaBtn = document.getElementById('removerFaltaBtn');
    const alterarAulaBtn = document.getElementById('alterarAulaBtn');
    const gerarRelatorioFaltasBtn = document.getElementById('gerarRelatorioFaltasBtn');
    const exportarGradeBtn = document.getElementById('exportarGradeBtn');
    const estatisticasBtn = document.getElementById('estatisticasBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const printGradeBtn = document.getElementById('printGradeBtn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }

    if (marcarFaltaBtn) {
        marcarFaltaBtn.addEventListener('click', marcarFaltaProfessor);
    }

    if (removerFaltaBtn) {
        removerFaltaBtn.addEventListener('click', removerFaltaProfessor);
    }

    if (alterarAulaBtn) {
        alterarAulaBtn.addEventListener('click', alterarAula);
    }

    if (gerarRelatorioFaltasBtn) {
        gerarRelatorioFaltasBtn.addEventListener('click', gerarRelatorioFaltas);
    }

    if (exportarGradeBtn) {
        exportarGradeBtn.addEventListener('click', exportarGrade);
    }

    if (estatisticasBtn) {
        estatisticasBtn.addEventListener('click', mostrarEstatisticas);
    }

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }

    if (printGradeBtn) {
        printGradeBtn.addEventListener('click', imprimirGrade);
    }

    // Configurar modal
    configurarModal();
}

function configurarModal() {
    const modal = document.getElementById('modalRelatorio');
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const printReportBtn = document.getElementById('printReportBtn');

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (printReportBtn) {
        printReportBtn.addEventListener('click', function() {
            window.print();
        });
    }

    // Fechar modal clicando fora
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function preencherSelectsTurmasEHorarios() {
    const turmaAlterar = document.getElementById('turmaAlterar');
    const horarioAlterar = document.getElementById('horarioAlterar');

    // Preencher select de turmas
    let turmasHTML = '';
    Object.keys(turmas).forEach(periodo => {
        turmas[periodo].forEach(turma => {
            turmasHTML += `<option value="${turma}">${turma}</option>`;
        });
    });
    turmaAlterar.innerHTML = turmasHTML;

    // Preencher select de horários baseado na primeira turma
    atualizarHorarios();

    turmaAlterar.addEventListener('change', atualizarHorarios);
}

function atualizarHorarios() {
    const turmaAlterar = document.getElementById('turmaAlterar');
    const horarioAlterar = document.getElementById('horarioAlterar');
    const turmaSelecionadaAlterar = turmaAlterar.value;

    let periodo = '';
    if (turmas.manha.includes(turmaSelecionadaAlterar)) periodo = 'manha';
    else if (turmas.tarde.includes(turmaSelecionadaAlterar)) periodo = 'tarde';
    else if (turmas.noite.includes(turmaSelecionadaAlterar)) periodo = 'noite';

    let horariosHTML = '';
    if (periodo) {
        horarios[periodo].forEach(horario => {
            horariosHTML += `<option value="${horario}">${horario}</option>`;
        });
    }
    horarioAlterar.innerHTML = horariosHTML;
}

function alterarAula() {
    const turma = document.getElementById('turmaAlterar').value;
    const dia = document.getElementById('diaAlterar').value;
    const horario = document.getElementById('horarioAlterar').value;
    const novaMateria = document.getElementById('novaMateria').value;
    const novoProfessor = document.getElementById('novoProfessor').value;

    if (turma && dia && horario && novaMateria && novoProfessor) {
        if (gradesHorarias[turma] && gradesHorarias[turma][dia] && gradesHorarias[turma][dia][horario]) {
            gradesHorarias[turma][dia][horario] = { materia: novaMateria, professor: novoProfessor };
            exibirGradeHoraria(turmaSelecionada); // Atualiza a grade exibida
            mostrarToast('Aula alterada com sucesso!', 'success');
        } else {
            mostrarToast('Erro: Horário ou turma não encontrados.', 'error');
        }
    } else {
        mostrarToast('Por favor, preencha todos os campos para alterar a aula.', 'warning');
    }
}

function marcarFaltaProfessor() {
    const professor = document.getElementById('professorFalta').value;
    const dia = document.getElementById('diaFalta').value; // Agora é o dia da semana

    if (professor && dia) {
        if (!faltasProfessores[professor]) {
            faltasProfessores[professor] = {};
        }
        faltasProfessores[professor][dia] = true; // Marca a falta para o dia específico
        exibirGradeHoraria(turmaSelecionada); // Atualiza a grade para refletir a falta
        mostrarToast(`Falta de ${professor} marcada para ${dia}.`, 'success');
    } else {
        mostrarToast('Por favor, preencha o nome do professor e o dia da falta.', 'warning');
    }
}

function removerFaltaProfessor() {
    const professor = document.getElementById('professorFalta').value;
    const dia = document.getElementById('diaFalta').value; // Agora é o dia da semana

    if (professor && dia) {
        if (faltasProfessores[professor] && faltasProfessores[professor][dia]) {
            delete faltasProfessores[professor][dia]; // Remove a falta para o dia específico
            exibirGradeHoraria(turmaSelecionada); // Atualiza a grade
            mostrarToast(`Falta de ${professor} removida para ${dia}.`, 'success');
        } else {
            mostrarToast(`Não há falta registrada para ${professor} em ${dia}.`, 'info');
        }
    } else {
        mostrarToast('Por favor, preencha o nome do professor e o dia para remover a falta.', 'warning');
    }
}

function exibirGradeHoraria(turma) {
    const gradeContainer = document.getElementById('gradeHorariaContainer');
    const grade = gradesHorarias[turma];
    const horariosDoPeriodo = getHorariosDoPeriodo(turma);

    let gradeHTML = `
        <div class="grade-header">
            <h2>Grade Horária - ${turma}</h2>
            <div class="grade-actions">
                <button id="fullscreenBtn" class="btn-icon" title="Tela cheia">⛶</button>
                <button id="printGradeBtn" class="btn-icon" title="Imprimir grade">🖨</button>
            </div>
        </div>`;

    // Se for aluno, mostrar seletor de dias
    if (!isPedagogo) {
        gradeHTML += `
            <div class="day-selector-container">
                <h3>Selecione o Dia da Semana:</h3>
                <div class="day-selector">
                    <button class="day-btn ${diaSelecionado === 'Segunda-feira' ? 'active' : ''}" data-day="Segunda-feira">
                        <span class="day-name">Segunda</span>
                        <span class="day-date">4/8</span>
                    </button>
                    <button class="day-btn ${diaSelecionado === 'Terça-feira' ? 'active' : ''}" data-day="Terça-feira">
                        <span class="day-name">Terça</span>
                        <span class="day-date">5/8</span>
                    </button>
                    <button class="day-btn ${diaSelecionado === 'Quarta-feira' ? 'active' : ''}" data-day="Quarta-feira">
                        <span class="day-name">Quarta</span>
                        <span class="day-date">6/8</span>
                    </button>
                    <button class="day-btn ${diaSelecionado === 'Quinta-feira' ? 'active' : ''}" data-day="Quinta-feira">
                        <span class="day-name">Quinta</span>
                        <span class="day-date">7/8</span>
                    </button>
                    <button class="day-btn ${diaSelecionado === 'Sexta-feira' ? 'active' : ''}" data-day="Sexta-feira">
                        <span class="day-name">Sexta</span>
                        <span class="day-date">8/8</span>
                    </button>
                </div>
            </div>`;
    }

    // Tabela da grade horária
    if (isPedagogo) {
        // Para pedagogo: mostrar todos os dias em uma tabela
        gradeHTML += `
            <div class="table-container">
                <table class="grade-table">
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Segunda-feira</th>
                            <th>Terça-feira</th>
                            <th>Quarta-feira</th>
                            <th>Quinta-feira</th>
                            <th>Sexta-feira</th>
                        </tr>
                    </thead>
                    <tbody>`;

        if (!grade) {
            // Se não há grade preenchida, mostra os horários vazios
            horariosDoPeriodo.forEach(horario => {
                gradeHTML += `<tr>
                                <td class="horario-cell">${horario}</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                              </tr>`;
            });
        } else {
            horariosDoPeriodo.forEach(horario => {
                gradeHTML += `<tr><td class="horario-cell">${horario}</td>`;
                
                ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'].forEach(dia => {
                    const aula = grade[dia] && grade[dia][horario];
                    let materia = '--';
                    let professor = '--';
                    let classFalta = '';

                    if (aula) {
                        materia = aula.materia;
                        professor = aula.professor;
                        // Verifica se o professor tem falta para o dia
                        if (faltasProfessores[professor] && faltasProfessores[professor][dia]) {
                            classFalta = 'falta';
                        }
                    }

                    gradeHTML += `<td class="${classFalta}">
                                    <div class="aula-info">
                                        <div class="materia">${materia}</div>
                                        <div class="professor">${professor}</div>
                                    </div>
                                  </td>`;
                });
                
                gradeHTML += `</tr>`;
            });
        }

        gradeHTML += `</tbody></table></div>`;
    } else {
        // Para aluno: mostrar apenas o dia selecionado
        gradeHTML += `
            <div class="table-container">
                <table class="grade-table">
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Matéria</th>
                            <th>Professor</th>
                        </tr>
                    </thead>
                    <tbody>`;

        if (!grade || !grade[diaSelecionado]) {
            // Se não há grade preenchida, mostra os horários vazios
            horariosDoPeriodo.forEach(horario => {
                gradeHTML += `<tr>
                                <td class="horario-cell">${horario}</td>
                                <td>--</td>
                                <td>--</td>
                              </tr>`;
            });
        } else {
            const aulasDoDia = grade[diaSelecionado];
            horariosDoPeriodo.forEach(horario => {
                const aula = aulasDoDia[horario];
                let materia = '--';
                let professor = '--';
                let classFalta = '';

                if (aula) {
                    materia = aula.materia;
                    professor = aula.professor;
                    // Verifica se o professor tem falta para o dia selecionado
                    if (faltasProfessores[professor] && faltasProfessores[professor][diaSelecionado]) {
                        classFalta = 'falta';
                    }
                }

                gradeHTML += `<tr class="${classFalta}">
                                <td class="horario-cell">${horario}</td>
                                <td>${materia}</td>
                                <td>${professor}</td>
                              </tr>`;
            });
        }

        gradeHTML += `</tbody></table></div>`;
    }
    
    // Adicionar informação sobre como preencher a grade se estiver vazia
    if (!grade) {
        gradeHTML += `<div class="info-box">
                        <p><strong>Informação:</strong> Esta grade horária ainda não foi preenchida.</p>
                        <p>Para preencher, você pode:</p>
                        <ul>
                            <li>Editar o arquivo <code>script.js</code> na função <code>inicializarGrades()</code></li>
                            <li>Seguir o exemplo das turmas 1A e 1B já preenchidas</li>
                            <li>Usar a função "Alterar Aula" (apenas para pedagogos logados)</li>
                        </ul>
                      </div>`;
    }
    
    gradeContainer.innerHTML = gradeHTML;

    // Adicionar event listeners para os botões de dia (apenas para alunos)
    if (!isPedagogo) {
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active de todos os botões
                document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
                // Adiciona active ao botão clicado
                this.classList.add('active');
                // Atualiza o dia selecionado
                diaSelecionado = this.getAttribute('data-day');
                // Reexibe a grade com o novo dia
                exibirGradeHoraria(turmaSelecionada);
            });
        });
    }
}

function getHorariosDoPeriodo(turma) {
    let periodo = '';
    if (turmas.manha.includes(turma)) periodo = 'manha';
    else if (turmas.tarde.includes(turma)) periodo = 'tarde';
    else if (turmas.noite.includes(turma)) periodo = 'noite';
    return horarios[periodo] || [];
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('tipoUsuario');
    localStorage.removeItem('turmaSelecionada');
    window.location.href = 'index.html';
}

// Funções de Toast (Notificações)
function mostrarToast(mensagem, tipo) {
    const toastBox = document.getElementById('toastBox');
    const toast = document.createElement('div');
    toast.classList.add('toast', tipo);
    toast.innerHTML = `<p>${mensagem}</p>`;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Funções de Relatório e Estatísticas
function gerarRelatorioFaltas() {
    const modalContent = document.getElementById('modalContent');
    let relatorioHTML = `<h3>Relatório de Faltas</h3>`;

    if (Object.keys(faltasProfessores).length === 0) {
        relatorioHTML += `<p>Nenhuma falta registrada até o momento.</p>`;
    } else {
        relatorioHTML += `<table class="report-table">
                            <thead>
                                <tr>
                                    <th>Professor</th>
                                    <th>Dias de Falta</th>
                                </tr>
                            </thead>
                            <tbody>`;
        for (const professor in faltasProfessores) {
            const diasFalta = Object.keys(faltasProfessores[professor]).join(', ');
            relatorioHTML += `<tr><td>${professor}</td><td>${diasFalta}</td></tr>`;
        }
        relatorioHTML += `</tbody></table>`;
    }
    modalContent.innerHTML = relatorioHTML;
    document.getElementById('modalRelatorio').style.display = 'block';
}

function exportarGrade() {
    const modalContent = document.getElementById('modalContent');
    const gradeTable = document.querySelector('.grade-table');

    if (gradeTable) {
        modalContent.innerHTML = `<h3>Grade Horária para Exportação</h3>` + gradeTable.outerHTML;
        document.getElementById('modalRelatorio').style.display = 'block';
    } else {
        mostrarToast('Nenhuma grade horária para exportar. Selecione uma turma primeiro.', 'warning');
    }
}

function mostrarEstatisticas() {
    const modalContent = document.getElementById('modalContent');
    let totalTurmas = turmas.manha.length + turmas.tarde.length + turmas.noite.length;
    let turmasPreenchidas = Object.keys(gradesHorarias).length;
    let professoresComFalta = Object.keys(faltasProfessores).length;

    modalContent.innerHTML = `
        <h3>Estatísticas do Sistema</h3>
        <p>Total de Turmas Cadastradas: ${totalTurmas}</p>
        <p>Turmas com Grade Preenchida: ${turmasPreenchidas}</p>
        <p>Professores com Faltas Registradas: ${professoresComFalta}</p>
    `;
    document.getElementById('modalRelatorio').style.display = 'block';
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function imprimirGrade() {
    const gradeContent = document.getElementById('gradeHorariaContainer').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = gradeContent;
    window.print();
    document.body.innerHTML = originalContent;
    location.reload(); // Recarrega a página para restaurar o estado original
}

// Preencher select de dias da semana para marcar/remover falta
document.addEventListener('DOMContentLoaded', () => {
    const diaFaltaSelect = document.getElementById('diaFalta');
    if (diaFaltaSelect) {
        const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
        diasSemana.forEach(dia => {
            const option = document.createElement('option');
            option.value = dia;
            option.textContent = dia;
            diaFaltaSelect.appendChild(option);
        });
    }

    const diaAlterarSelect = document.getElementById('diaAlterar');
    if (diaAlterarSelect) {
        const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
        diasSemana.forEach(dia => {
            const option = document.createElement('option');
            option.value = dia;
            option.textContent = dia;
            diaAlterarSelect.appendChild(option);
        });
    }
});

