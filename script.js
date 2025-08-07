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

// Dados das grades horárias
const gradesHorarias = {};

// Inicializar grades horárias com dados de exemplo
function inicializarGrades() {
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
    gradesHorarias["Turma 1° PORTOS"] = {
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
let diaSelecionado = 'Segunda-feira';

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

    if (alunoBtn) {
        alunoBtn.addEventListener('click', function() {
            tipoUsuario = 'aluno';
            mostrarSelecaoTurma();
        });
    }

    if (pedagogoBtn) {
        pedagogoBtn.addEventListener('click', function() {
            tipoUsuario = 'pedagogo';
            window.location.href = 'login.html';
        });
    }
}

function mostrarSelecaoTurma() {
    const container = document.querySelector('.container');
    if (container) {
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

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'pedagogo' && password === '123456') {
                usuarioLogado = true;
                tipoUsuario = 'pedagogo';
                localStorage.setItem('usuarioLogado', 'true');
                localStorage.setItem('tipoUsuario', 'pedagogo');
                window.location.href = 'grade.html';
            } else {
                if (loginError) {
                    loginError.textContent = 'Usuário ou senha incorretos!';
                }
            }
        });
    }
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
        if (userInfo) userInfo.textContent = 'Pedagogo Logado';
        if (logoutBtn) logoutBtn.style.display = 'block';
        if (pedagogoFunctionsTop) pedagogoFunctionsTop.style.display = 'block';
        if (pedagogoInfo) pedagogoInfo.style.display = 'block';
        preencherSelectsTurmasEHorarios();
        atualizarResumoDia();
    } else if (tipoUsuario === 'aluno') {
        if (userInfo) userInfo.textContent = 'Aluno';
        if (alunoCalendar) alunoCalendar.style.display = 'block';
        configurarSeletorDias();
    }
}

function configurarDatasCalendario() {
    if (tipoUsuario === 'aluno') {
        const hoje = new Date();
        const diasSemana = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
        
        const diaSemana = hoje.getDay();
        const diasParaSegunda = diaSemana === 0 ? -6 : 1 - diaSemana;
        const segundaFeira = new Date(hoje);
        segundaFeira.setDate(hoje.getDate() + diasParaSegunda);

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
            dayButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            diaSelecionado = this.getAttribute('data-day');
            
            if (turmaSelecionada) {
                exibirGradeHoraria(turmaSelecionada);
            }
        });
    });
}

function criarBotoesTurmas() {
    const turmaButtons = document.getElementById('turmaButtons');
    if (!turmaButtons) return;
    
    let buttonsHTML = '';

    if (tipoUsuario === 'pedagogo' && usuarioLogado) {
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
        buttonsHTML += `<button onclick="exibirGradeHoraria('${turmaSelecionada}')" class="selected">${turmaSelecionada}</button>`;
    }

    turmaButtons.innerHTML = buttonsHTML;
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

function exibirGradeHoraria(turma) {
    turmaSelecionada = turma;
    const gradeHorariaDiv = document.getElementById("gradeHoraria");
    const turmaTitle = document.getElementById("turmaTitle");
    const gradeTableBody = document.getElementById("gradeTableBody");
    const infoBox = document.getElementById("infoBox");

    if (!gradeHorariaDiv || !turmaTitle || !gradeTableBody) return;

    turmaTitle.textContent = `Grade Horária - ${turma}`;

    // Esconder a infoBox por padrão
    if (infoBox) infoBox.style.display = 'none';

    let gradeDaTurma = gradesHorarias[turma];

    // Se a grade da turma não estiver definida, exibe a infoBox
    if (!gradeDaTurma) {
        if (infoBox) infoBox.style.display = 'block';
        gradeDaTurma = {};
    }

    // Obter os horários baseados no período da turma
    let horariosDoPeriodo = [];
    if (turmas.manha.includes(turma)) {
        horariosDoPeriodo = horarios.manha;
    } else if (turmas.tarde.includes(turma)) {
        horariosDoPeriodo = horarios.tarde;
    } else if (turmas.noite.includes(turma)) {
        horariosDoPeriodo = horarios.noite;
    }

    let tableHTML = "";

    // Cabeçalho da tabela
    tableHTML += `<thead>
        <tr>
            <th>Horário</th>
            <th>Segunda-feira</th>
            <th>Terça-feira</th>
            <th>Quarta-feira</th>
            <th>Quinta-feira</th>
            <th>Sexta-feira</th>
        </tr>
    </thead><tbody>`;

    const diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];

    horariosDoPeriodo.forEach(horario => {
        tableHTML += `<tr><td class="horario-cell">${horario}</td>`;

        diasDaSemana.forEach(dia => {
            const aula = gradeDaTurma[dia] ? gradeDaTurma[dia][horario] : null;
            const materia = aula ? aula.materia : "--";
            const professor = aula ? aula.professor : "--";
            
            // Verifica se há falta para o professor neste dia
            const isFalta = faltasProfessores[professor] && faltasProfessores[professor][dia] ? "falta" : "";

            tableHTML += `<td class="${isFalta}">
                <div class="aula-info">
                    <span class="materia">${materia}</span>
                    <span class="professor">${professor}</span>
                </div>
            </td>`;
        });
        tableHTML += `</tr>`;
    });

    tableHTML += `</tbody>`;
    gradeTableBody.innerHTML = tableHTML;

    // Adicionar classe 'selected' ao botão da turma selecionada
    const allTurmaButtons = document.querySelectorAll('#turmaButtons button');
    allTurmaButtons.forEach(btn => {
        if (btn.textContent === turma) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Atualizar o dia selecionado no calendário do aluno
    if (tipoUsuario === 'aluno') {
        const dayButtons = document.querySelectorAll('.day-btn');
        dayButtons.forEach(btn => {
            if (btn.getAttribute('data-day') === diaSelecionado) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    gradeHorariaDiv.style.display = 'block';
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

    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    if (marcarFaltaBtn) marcarFaltaBtn.addEventListener('click', marcarFaltaProfessor);
    if (removerFaltaBtn) removerFaltaBtn.addEventListener('click', removerFaltaProfessor);
    if (alterarAulaBtn) alterarAulaBtn.addEventListener('click', alterarAula);
    if (gerarRelatorioFaltasBtn) gerarRelatorioFaltasBtn.addEventListener('click', gerarRelatorioFaltas);
    if (exportarGradeBtn) exportarGradeBtn.addEventListener('click', exportarGrade);
    if (estatisticasBtn) estatisticasBtn.addEventListener('click', mostrarEstatisticas);
    if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
    if (printGradeBtn) printGradeBtn.addEventListener('click', imprimirGrade);

    configurarModal();
}

function configurarModal() {
    const modal = document.getElementById('modalRelatorio');
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const printReportBtn = document.getElementById('printReportBtn');

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (modal) modal.style.display = 'none';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            if (modal) modal.style.display = 'none';
        });
    }

    if (printReportBtn) {
        printReportBtn.addEventListener('click', function() {
            window.print();
        });
    }
}

// Funções do pedagogo
function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}

function marcarFaltaProfessor() {
    const professor = prompt('Nome do professor:');
    const dia = prompt('Dia da semana (Segunda-feira, Terça-feira, etc.):');
    
    if (professor && dia) {
        if (!faltasProfessores[professor]) {
            faltasProfessores[professor] = {};
        }
        faltasProfessores[professor][dia] = true;
        
        mostrarNotificacao(`Falta marcada para ${professor} na ${dia}`, 'success');
        
        if (turmaSelecionada) {
            exibirGradeHoraria(turmaSelecionada);
        }
    }
}

function removerFaltaProfessor() {
    const professor = prompt('Nome do professor:');
    const dia = prompt('Dia da semana (Segunda-feira, Terça-feira, etc.):');
    
    if (professor && dia && faltasProfessores[professor] && faltasProfessores[professor][dia]) {
        delete faltasProfessores[professor][dia];
        
        if (Object.keys(faltasProfessores[professor]).length === 0) {
            delete faltasProfessores[professor];
        }
        
        mostrarNotificacao(`Falta removida para ${professor} na ${dia}`, 'success');
        
        if (turmaSelecionada) {
            exibirGradeHoraria(turmaSelecionada);
        }
    } else {
        mostrarNotificacao('Falta não encontrada', 'error');
    }
}

function alterarAula() {
    const turma = prompt('Nome da turma:');
    const dia = prompt('Dia da semana (Segunda-feira, Terça-feira, etc.):');
    const horario = prompt('Horário (ex: 7h30-8h20):');
    const novaMateria = prompt('Nova matéria:');
    const novoProfessor = prompt('Novo professor:');
    
    if (turma && dia && horario && novaMateria && novoProfessor) {
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
        
        mostrarNotificacao(`Aula alterada com sucesso`, 'success');
        
        if (turmaSelecionada === turma) {
            exibirGradeHoraria(turmaSelecionada);
        }
    }
}

function gerarRelatorioFaltas() {
    const modal = document.getElementById('modalRelatorio');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    let relatorio = '<h3>Relatório de Faltas</h3>';
    
    if (Object.keys(faltasProfessores).length === 0) {
        relatorio += '<p>Nenhuma falta registrada.</p>';
    } else {
        relatorio += '<ul>';
        for (const professor in faltasProfessores) {
            relatorio += `<li><strong>${professor}</strong>: `;
            const dias = Object.keys(faltasProfessores[professor]);
            relatorio += dias.join(', ');
            relatorio += '</li>';
        }
        relatorio += '</ul>';
    }
    
    modalContent.innerHTML = relatorio;
    modal.style.display = 'block';
}

function exportarGrade() {
    if (!turmaSelecionada) {
        mostrarNotificacao('Selecione uma turma primeiro', 'error');
        return;
    }
    
    const modal = document.getElementById('modalRelatorio');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    let exportacao = `<h3>Grade Horária - ${turmaSelecionada}</h3>`;
    exportacao += '<table border="1" style="width:100%; border-collapse: collapse;">';
    exportacao += '<tr><th>Horário</th><th>Segunda</th><th>Terça</th><th>Quarta</th><th>Quinta</th><th>Sexta</th></tr>';
    
    let horariosDoPeriodo = [];
    if (turmas.manha.includes(turmaSelecionada)) {
        horariosDoPeriodo = horarios.manha;
    } else if (turmas.tarde.includes(turmaSelecionada)) {
        horariosDoPeriodo = horarios.tarde;
    } else if (turmas.noite.includes(turmaSelecionada)) {
        horariosDoPeriodo = horarios.noite;
    }
    
    const gradeDaTurma = gradesHorarias[turmaSelecionada] || {};
    const diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
    
    horariosDoPeriodo.forEach(horario => {
        exportacao += `<tr><td>${horario}</td>`;
        diasDaSemana.forEach(dia => {
            const aula = gradeDaTurma[dia] ? gradeDaTurma[dia][horario] : null;
            const materia = aula ? aula.materia : "--";
            const professor = aula ? aula.professor : "--";
            exportacao += `<td>${materia}<br><small>${professor}</small></td>`;
        });
        exportacao += '</tr>';
    });
    
    exportacao += '</table>';
    
    modalContent.innerHTML = exportacao;
    modal.style.display = 'block';
}

function mostrarEstatisticas() {
    const modal = document.getElementById('modalRelatorio');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    const totalTurmas = Object.keys(turmas).reduce((acc, periodo) => acc + turmas[periodo].length, 0);
    const turmasComGrade = Object.keys(gradesHorarias).length;
    const totalProfessores = Object.keys(faltasProfessores).length;
    
    let estatisticas = '<h3>Estatísticas do Sistema</h3>';
    estatisticas += `<p><strong>Total de Turmas:</strong> ${totalTurmas}</p>`;
    estatisticas += `<p><strong>Turmas com Grade:</strong> ${turmasComGrade}</p>`;
    estatisticas += `<p><strong>Professores com Faltas:</strong> ${totalProfessores}</p>`;
    
    modalContent.innerHTML = estatisticas;
    modal.style.display = 'block';
}

function toggleFullscreen() {
    const gradeHoraria = document.getElementById('gradeHoraria');
    if (!gradeHoraria) return;
    
    if (gradeHoraria.classList.contains('fullscreen')) {
        gradeHoraria.classList.remove('fullscreen');
    } else {
        gradeHoraria.classList.add('fullscreen');
    }
}

function imprimirGrade() {
    window.print();
}

function preencherSelectsTurmasEHorarios() {
    // Função para preencher selects se necessário
}

function atualizarResumoDia() {
    // Função para atualizar resumo do dia se necessário
}

function mostrarNotificacao(mensagem, tipo) {
    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.className = `toast ${tipo}`;
    notificacao.textContent = mensagem;
    
    // Adicionar ao body
    document.body.appendChild(notificacao);
    
    // Remover após 3 segundos
    setTimeout(() => {
        if (notificacao.parentNode) {
            notificacao.parentNode.removeChild(notificacao);
        }
    }, 3000);
}

