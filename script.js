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
    const materias = ['Matemática', 'Português', 'História', 'Geografia', 'Ciências', 'Educação Física'];
    const professores = ['Prof. Silva', 'Prof. Santos', 'Prof. Oliveira', 'Prof. Costa', 'Prof. Pereira', 'Prof. Almeida'];
    const dias = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

    Object.keys(turmas).forEach(periodo => {
        turmas[periodo].forEach(turma => {
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

    if (turmaSelecionada) {
        exibirGradeHoraria(turmaSelecionada);
    }
}

function configurarInterface() {
    const userInfo = document.getElementById('userInfo');
    const logoutBtn = document.getElementById('logoutBtn');
    const pedagogoFunctionsTop = document.getElementById('pedagogoFunctionsTop');
    const alunoCalendar = document.getElementById('alunoCalendar');

    if (tipoUsuario === 'pedagogo' && usuarioLogado) {
        userInfo.textContent = 'Pedagogo Logado';
        logoutBtn.style.display = 'block';
        pedagogoFunctionsTop.style.display = 'block';
        preencherSelectsTurmasEHorarios();
    } else if (tipoUsuario === 'aluno') {
        userInfo.textContent = 'Aluno';
        alunoCalendar.style.display = 'block';
        configurarSeletorDias();
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
}

function configurarEventos() {
    const logoutBtn = document.getElementById('logoutBtn');
    const marcarFaltaBtn = document.getElementById('marcarFaltaBtn');
    const removerFaltaBtn = document.getElementById('removerFaltaBtn');
    const alterarAulaBtn = document.getElementById('alterarAulaBtn');

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
        
        // Simular verificação de falta para o dia atual
        const hoje = new Date().toISOString().split('T')[0];
        return faltasProfessores[professor] && faltasProfessores[professor].includes(hoje);
    } else {
        // Para pedagogo, mostrar faltas de hoje
        const hoje = new Date().toISOString().split('T')[0];
        const diaSemana = obterDiaSemana(new Date());
        
        if (dia !== diaSemana) return false;
        
        return faltasProfessores[professor] && faltasProfessores[professor].includes(hoje);
    }
}

function obterDiaSemana(data) {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return dias[data.getDay()];
}

function marcarFaltaProfessor() {
    const professorFalta = document.getElementById('professorFalta').value;
    const dataFalta = document.getElementById('dataFalta').value;

    if (!professorFalta || !dataFalta) {
        alert('Por favor, preencha o nome do professor e a data da falta.');
        return;
    }

    if (!faltasProfessores[professorFalta]) {
        faltasProfessores[professorFalta] = [];
    }

    if (!faltasProfessores[professorFalta].includes(dataFalta)) {
        faltasProfessores[professorFalta].push(dataFalta);
    }

    // Limpar campos
    document.getElementById('professorFalta').value = '';
    document.getElementById('dataFalta').value = '';

    // Atualizar grade se necessário
    if (turmaSelecionada) {
        exibirGradeHoraria(turmaSelecionada);
    }

    alert('Falta marcada com sucesso!');
}

function removerFaltaProfessor() {
    const professorRemoverFalta = document.getElementById('professorRemoverFalta').value;
    const dataRemoverFalta = document.getElementById('dataRemoverFalta').value;

    if (!professorRemoverFalta || !dataRemoverFalta) {
        alert('Por favor, preencha o nome do professor e a data para remover a falta.');
        return;
    }

    if (faltasProfessores[professorRemoverFalta]) {
        const index = faltasProfessores[professorRemoverFalta].indexOf(dataRemoverFalta);
        if (index > -1) {
            faltasProfessores[professorRemoverFalta].splice(index, 1);
        }
    }

    // Limpar campos
    document.getElementById('professorRemoverFalta').value = '';
    document.getElementById('dataRemoverFalta').value = '';

    // Atualizar grade se necessário
    if (turmaSelecionada) {
        exibirGradeHoraria(turmaSelecionada);
    }

    alert('Falta removida com sucesso!');
}

function alterarAula() {
    const turmaAlterar = document.getElementById('turmaAlterar').value;
    const diaAlterar = document.getElementById('diaAlterar').value;
    const horarioAlterar = document.getElementById('horarioAlterar').value;
    const novaMateria = document.getElementById('novaMateria').value;
    const novoProfessor = document.getElementById('novoProfessor').value;

    if (!novaMateria || !novoProfessor) {
        alert('Por favor, preencha a nova matéria e o novo professor.');
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

    alert('Aula alterada com sucesso!');
}

function logout() {
    usuarioLogado = false;
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('tipoUsuario');
    localStorage.removeItem('turmaSelecionada');
    window.location.href = 'index.html';
}

