// Dados das turmas e horários
const horarios = {
    manha: ['7h30-8h20', '8h20-9h10', '9h10-10h00', '10h20-11h10', '11h10-12h00', '12h00-12h50'],
    tarde: ['13h30-14h20', '14h20-15h10', '15h10-16h00', '16h20-17h10', '17h10-18h00', '18h00-18h30'],
    noite: ['18h40-19h40', '19h40-20h30', '20h30-21h30', '21h30-22h10', '22h10-23h00']
};

// Dados das turmas
const turmas = {
    manha: [
        'Turma 1A', 'Turma 1B', 'Turma 1C', 'Turma 1D',
        'Turma 2A', 'Turma 2B', 'Turma 2C', 'Turma 2D',
        'Turma 3A', 'Turma 3B', 'Turma 3C', 'Turma 3D'
    ],
    tarde: [
        'Turma 4A', 'Turma 4B', 'Turma 4C', 'Turma 4D',
        'Turma 5A', 'Turma 5B', 'Turma 5C', 'Turma 5D',
        'Turma 6A', 'Turma 6B', 'Turma 6C', 'Turma 6D'
    ],
    noite: [
        'Turma 7A', 'Turma 7B', 'Turma 7C', 'Turma 7D',
        'Turma 8A', 'Turma 8B', 'Turma 8C', 'Turma 8D'
    ]
};

// Dados das grades horárias (exemplo)
const gradesHorarias = {};

// Inicializar grades horárias com dados de exemplo
function inicializarGrades() {
    // Exemplo para a Turma 1A (Manhã)
    gradesHorarias["Turma 1A"] = {
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

    // Preencher as outras turmas com dados aleatórios para demonstração
    const materias = ["Matemática", "Português", "História", "Geografia", "Ciências", "Educação Física"];
    const professores = ["Prof. Silva", "Prof. Santos", "Prof. Oliveira", "Prof. Costa", "Prof. Pereira", "Prof. Almeida"];
    const dias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];

    Object.keys(turmas).forEach(periodo => {
        turmas[periodo].forEach(turma => {
            if (turma !== "Turma 1A") { // Não sobrescrever a Turma 1A
                gradesHorarias[turma] = {};
                dias.forEach(dia => {
                    gradesHorarias[turma][dia] = {};
                    horarios[periodo].forEach(horario => {
                        const materiaIndex = Math.floor(Math.random() * materias.length);
                        const professorIndex = Math.floor(Math.random() * professores.length);
                        gradesHorarias[turma][dia][horario] = {
                            materia: materias[materiaIndex],
                            professor: professores[professorIndex]
                        };
                    });
                });
            }
        });
    });
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

function exibirGradeHoraria(turma) {
    turmaSelecionada = turma;
    const turmaNome = document.getElementById('turmaNome');
    const gradeTable = document.getElementById('gradeHorariaTable').getElementsByTagName('tbody')[0];

    turmaNome.textContent = turma;

    // Determinar período da turma
    let periodo = '';
    if (turmas.manha.includes(turma)) periodo = 'manha';
    else if (turmas.tarde.includes(turma)) periodo = 'tarde';
    else if (turmas.noite.includes(turma)) periodo = 'noite';

    // Limpar tabela
    gradeTable.innerHTML = '';

    // Preencher tabela
    horarios[periodo].forEach(horario => {
        const row = gradeTable.insertRow();
        const cellHorario = row.insertCell(0);
        cellHorario.textContent = horario;

        ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'].forEach(dia => {
            const cell = row.insertCell();
            const aula = gradesHorarias[turma][dia][horario];
            cell.innerHTML = `<strong>${aula.materia}</strong><br>${aula.professor}`;

            // Verificar se o professor faltou
            if (verificarFaltaProfessor(aula.professor, dia)) {
                cell.classList.add('falta');
            }

            // Para alunos, destacar apenas o dia selecionado
            if (tipoUsuario === 'aluno' && dia !== diaSelecionado) {
                cell.style.opacity = '0.3';
            } else if (tipoUsuario === 'aluno') {
                cell.style.opacity = '1';
            }
        });
    });

    // Atualizar botões da sidebar para mostrar qual está selecionado
    const sidebarButtons = document.querySelectorAll('#turmaButtons button');
    sidebarButtons.forEach(btn => {
        btn.classList.remove('selected');
        if (btn.textContent === turma) {
            btn.classList.add('selected');
        }
    });
}

function verificarFaltaProfessor(professor, dia) {
    if (tipoUsuario === 'aluno') {
        // Para alunos, verificar faltas apenas no dia selecionado
        if (dia !== diaSelecionado) return false;
        
        return faltasProfessores[professor] && faltasProfessores[professor][dia];
    } else {
        // Para pedagogo, mostrar faltas do dia
        return faltasProfessores[professor] && faltasProfessores[professor][dia];
    }
}

function marcarFaltaProfessor() {
    const professorFalta = document.getElementById('professorFalta').value;
    const diaFalta = document.getElementById('diaFalta').value;

    if (!professorFalta || !diaFalta) {
        mostrarToast('Por favor, preencha o nome do professor e selecione o dia da falta.', 'error');
        return;
    }

    if (!faltasProfessores[professorFalta]) {
        faltasProfessores[professorFalta] = {};
    }

    faltasProfessores[professorFalta][diaFalta] = true;

    // Limpar campos
    document.getElementById('professorFalta').value = '';
    document.getElementById('diaFalta').value = '';

    // Atualizar grade se necessário
    if (turmaSelecionada) {
        exibirGradeHoraria(turmaSelecionada);
    }

    atualizarResumoDia();
    mostrarToast('Falta marcada com sucesso!', 'success');
}

function removerFaltaProfessor() {
    const professorRemoverFalta = document.getElementById('professorRemoverFalta').value;
    const diaRemoverFalta = document.getElementById('diaRemoverFalta').value;

    if (!professorRemoverFalta || !diaRemoverFalta) {
        mostrarToast('Por favor, preencha o nome do professor e selecione o dia para remover a falta.', 'error');
        return;
    }

    if (faltasProfessores[professorRemoverFalta]) {
        delete faltasProfessores[professorRemoverFalta][diaRemoverFalta];
        
        // Se não há mais faltas para este professor, remover o objeto
        if (Object.keys(faltasProfessores[professorRemoverFalta]).length === 0) {
            delete faltasProfessores[professorRemoverFalta];
        }
    }

    // Limpar campos
    document.getElementById('professorRemoverFalta').value = '';
    document.getElementById('diaRemoverFalta').value = '';

    // Atualizar grade se necessário
    if (turmaSelecionada) {
        exibirGradeHoraria(turmaSelecionada);
    }

    atualizarResumoDia();
    mostrarToast('Falta removida com sucesso!', 'success');
}

function alterarAula() {
    const turmaAlterar = document.getElementById('turmaAlterar').value;
    const diaAlterar = document.getElementById('diaAlterar').value;
    const horarioAlterar = document.getElementById('horarioAlterar').value;
    const novaMateria = document.getElementById('novaMateria').value;
    const novoProfessor = document.getElementById('novoProfessor').value;

    if (!novaMateria || !novoProfessor) {
        mostrarToast('Por favor, preencha a nova matéria e o novo professor.', 'error');
        return;
    }

    gradesHorarias[turmaAlterar][diaAlterar][horarioAlterar] = {
        materia: novaMateria,
        professor: novoProfessor
    };

    // Limpar campos
    document.getElementById('novaMateria').value = '';
    document.getElementById('novoProfessor').value = '';

    // Atualizar grade se a turma alterada estiver sendo exibida
    if (turmaSelecionada === turmaAlterar) {
        exibirGradeHoraria(turmaSelecionada);
    }

    mostrarToast('Aula alterada com sucesso!', 'success');
}

function gerarRelatorioFaltas() {
    const modal = document.getElementById('modalRelatorio');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = 'Relatório de Faltas';
    
    let relatorioHTML = '<h4>Faltas por Professor</h4>';
    
    if (Object.keys(faltasProfessores).length === 0) {
        relatorioHTML += '<p>Nenhuma falta registrada.</p>';
    } else {
        relatorioHTML += '<table style="width: 100%; border-collapse: collapse;">';
        relatorioHTML += '<thead><tr style="background: #f8fafc;"><th style="padding: 0.5rem; border: 1px solid #e2e8f0;">Professor</th><th style="padding: 0.5rem; border: 1px solid #e2e8f0;">Dias com Falta</th></tr></thead>';
        relatorioHTML += '<tbody>';
        
        Object.keys(faltasProfessores).forEach(professor => {
            const diasFalta = Object.keys(faltasProfessores[professor]).join(', ');
            relatorioHTML += `<tr><td style="padding: 0.5rem; border: 1px solid #e2e8f0;">${professor}</td><td style="padding: 0.5rem; border: 1px solid #e2e8f0;">${diasFalta}</td></tr>`;
        });
        
        relatorioHTML += '</tbody></table>';
    }

    modalBody.innerHTML = relatorioHTML;
    modal.style.display = 'block';
}

function exportarGrade() {
    if (!turmaSelecionada) {
        mostrarToast('Selecione uma turma para exportar a grade.', 'error');
        return;
    }

    const modal = document.getElementById('modalRelatorio');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = `Grade Horária - ${turmaSelecionada}`;
    
    // Determinar período da turma
    let periodo = '';
    if (turmas.manha.includes(turmaSelecionada)) periodo = 'manha';
    else if (turmas.tarde.includes(turmaSelecionada)) periodo = 'tarde';
    else if (turmas.noite.includes(turmaSelecionada)) periodo = 'noite';

    let gradeHTML = '<table style="width: 100%; border-collapse: collapse;">';
    gradeHTML += '<thead><tr style="background: #3b82f6; color: white;">';
    gradeHTML += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Horário</th>';
    gradeHTML += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Segunda-feira</th>';
    gradeHTML += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Terça-feira</th>';
    gradeHTML += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Quarta-feira</th>';
    gradeHTML += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Quinta-feira</th>';
    gradeHTML += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Sexta-feira</th>';
    gradeHTML += '</tr></thead><tbody>';

    horarios[periodo].forEach(horario => {
        gradeHTML += '<tr>';
        gradeHTML += `<td style="padding: 0.75rem; border: 1px solid #e2e8f0; font-weight: bold;">${horario}</td>`;
        
        ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'].forEach(dia => {
            const aula = gradesHorarias[turmaSelecionada][dia][horario];
            gradeHTML += `<td style="padding: 0.75rem; border: 1px solid #e2e8f0;"><strong>${aula.materia}</strong><br>${aula.professor}</td>`;
        });
        
        gradeHTML += '</tr>';
    });

    gradeHTML += '</tbody></table>';
    modalBody.innerHTML = gradeHTML;
    modal.style.display = 'block';
}

function mostrarEstatisticas() {
    const modal = document.getElementById('modalRelatorio');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = 'Estatísticas do Sistema';
    
    // Calcular estatísticas
    const totalProfessores = new Set();
    const totalMaterias = new Set();
    let totalAulas = 0;

    Object.keys(gradesHorarias).forEach(turma => {
        Object.keys(gradesHorarias[turma]).forEach(dia => {
            Object.keys(gradesHorarias[turma][dia]).forEach(horario => {
                const aula = gradesHorarias[turma][dia][horario];
                totalProfessores.add(aula.professor);
                totalMaterias.add(aula.materia);
                totalAulas++;
            });
        });
    });

    const totalFaltas = Object.keys(faltasProfessores).reduce((total, professor) => {
        return total + Object.keys(faltasProfessores[professor]).length;
    }, 0);

    let estatisticasHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                <h4 style="color: #3b82f6; margin-bottom: 0.5rem;">Total de Turmas</h4>
                <p style="font-size: 2rem; font-weight: bold; color: #1e293b;">${Object.keys(turmas.manha).length + Object.keys(turmas.tarde).length + Object.keys(turmas.noite).length}</p>
            </div>
            <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                <h4 style="color: #10b981; margin-bottom: 0.5rem;">Total de Professores</h4>
                <p style="font-size: 2rem; font-weight: bold; color: #1e293b;">${totalProfessores.size}</p>
            </div>
            <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                <h4 style="color: #f59e0b; margin-bottom: 0.5rem;">Total de Matérias</h4>
                <p style="font-size: 2rem; font-weight: bold; color: #1e293b;">${totalMaterias.size}</p>
            </div>
            <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                <h4 style="color: #ef4444; margin-bottom: 0.5rem;">Total de Faltas</h4>
                <p style="font-size: 2rem; font-weight: bold; color: #1e293b;">${totalFaltas}</p>
            </div>
        </div>
        <h4 style="margin-top: 2rem;">Distribuição por Período</h4>
        <ul>
            <li><strong>Manhã:</strong> ${turmas.manha.length} turmas</li>
            <li><strong>Tarde:</strong> ${turmas.tarde.length} turmas</li>
            <li><strong>Noite:</strong> ${turmas.noite.length} turmas</li>
        </ul>
    `;

    modalBody.innerHTML = estatisticasHTML;
    modal.style.display = 'block';
}

function toggleFullscreen() {
    const gradeContainer = document.getElementById('gradeHorariaContainer');
    gradeContainer.classList.toggle('fullscreen');
}

function imprimirGrade() {
    window.print();
}

function atualizarResumoDia() {
    const faltasHoje = document.getElementById('faltasHoje');
    const totalTurmas = document.getElementById('totalTurmas');
    const professoresAtivos = document.getElementById('professoresAtivos');

    if (faltasHoje) {
        const totalFaltas = Object.keys(faltasProfessores).reduce((total, professor) => {
            return total + Object.keys(faltasProfessores[professor]).length;
        }, 0);
        faltasHoje.textContent = totalFaltas;
    }

    if (totalTurmas) {
        totalTurmas.textContent = Object.keys(turmas.manha).length + Object.keys(turmas.tarde).length + Object.keys(turmas.noite).length;
    }

    if (professoresAtivos) {
        const professores = new Set();
        Object.keys(gradesHorarias).forEach(turma => {
            Object.keys(gradesHorarias[turma]).forEach(dia => {
                Object.keys(gradesHorarias[turma][dia]).forEach(horario => {
                    professores.add(gradesHorarias[turma][dia][horario].professor);
                });
            });
        });
        professoresAtivos.textContent = professores.size;
    }
}

function mostrarToast(mensagem, tipo = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    toast.innerHTML = `
        <strong>${tipo === 'success' ? 'Sucesso!' : tipo === 'error' ? 'Erro!' : 'Info!'}</strong>
        <p>${mensagem}</p>
    `;

    toastContainer.appendChild(toast);

    // Remover toast após 3 segundos
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function logout() {
    usuarioLogado = false;
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('tipoUsuario');
    localStorage.removeItem('turmaSelecionada');
    window.location.href = 'index.html';
}

