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
    manha: ['Turma 1A', 'Turma 1B', 'Turma 1C', 'Turma 1D', 'Turma 2A', 'Turma 2B', 'Turma 2C', 'Turma 2D', 'Turma 3A', 'Turma 3B', 'Turma 3C', 'Turma 3D'],
    tarde: ['Turma 4A', 'Turma 4B', 'Turma 4C', 'Turma 4D', 'Turma 5A', 'Turma 5B', 'Turma 5C', 'Turma 5D', 'Turma 6A', 'Turma 6B', 'Turma 6C', 'Turma 6D'],
    noite: ['Turma 7A', 'Turma 7B', 'Turma 7C', 'Turma 7D', 'Turma 8A', 'Turma 8B', 'Turma 8C', 'Turma 8D']
};

// Função para inicializar as grades horárias
function inicializarGrades() {
    // Exemplo para Turma 1A (Manhã)
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

    // Exemplo para Turma 1B (Manhã)
    gradesHorarias["Turma 1B"] = {
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
}

// Função para obter todos os professores únicos
function obterTodosProfessores() {
    const professores = new Set();
    
    Object.values(gradesHorarias).forEach(turma => {
        Object.values(turma).forEach(dia => {
            Object.values(dia).forEach(aula => {
                if (aula.professor) {
                    professores.add(aula.professor);
                }
            });
        });
    });
    
    return Array.from(professores).sort();
}

// Função para popular dropdowns de professores
function popularDropdownProfessores() {
    const professores = obterTodosProfessores();
    
    const selects = [
        document.getElementById('professorFaltaModal'),
        document.getElementById('professorRemoverFaltaModal')
    ];
    
    selects.forEach(select => {
        if (select) {
            select.innerHTML = '<option value="">Escolha um professor</option>';
            professores.forEach(professor => {
                const option = document.createElement('option');
                option.value = professor;
                option.textContent = professor;
                select.appendChild(option);
            });
        }
    });
}

// Função para popular dropdown de turmas
function popularDropdownTurmas() {
    const turmaSelect = document.getElementById('turmaEditarModal');
    if (turmaSelect) {
        turmaSelect.innerHTML = '<option value="">Selecione a turma</option>';
        
        Object.values(turmas).flat().forEach(turma => {
            const option = document.createElement('option');
            option.value = turma;
            option.textContent = turma;
            turmaSelect.appendChild(option);
        });
    }
}

// Função para popular dropdown de horários baseado na turma
function popularDropdownHorarios(turmaSelecionada) {
    const horarioSelect = document.getElementById('horarioEditarModal');
    if (!horarioSelect || !turmaSelecionada) return;
    
    let horariosParaTurma = [];
    
    // Determinar período da turma
    if (turmas.manha.includes(turmaSelecionada)) {
        horariosParaTurma = horarios.manha;
    } else if (turmas.tarde.includes(turmaSelecionada)) {
        horariosParaTurma = horarios.tarde;
    } else if (turmas.noite.includes(turmaSelecionada)) {
        horariosParaTurma = horarios.noite;
    }
    
    horarioSelect.innerHTML = '<option value="">Selecione o horário</option>';
    horariosParaTurma.forEach(horario => {
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        horarioSelect.appendChild(option);
    });
}

// Função para marcar falta de professor
function marcarFaltaProfessor(professor, dia) {
    if (!faltasProfessores[professor]) {
        faltasProfessores[professor] = new Set();
    }
    faltasProfessores[professor].add(dia);
    
    // Salvar no localStorage
    localStorage.setItem('faltasProfessores', JSON.stringify(
        Object.fromEntries(
            Object.entries(faltasProfessores).map(([prof, dias]) => [prof, Array.from(dias)])
        )
    ));
    
    // Atualizar visual da grade
    atualizarVisualFaltas();
    
    mostrarNotificacao(`Falta marcada para ${professor} na ${dia}`, 'success');
}

// Função para remover falta de professor
function removerFaltaProfessor(professor, dia) {
    if (faltasProfessores[professor]) {
        faltasProfessores[professor].delete(dia);
        
        if (faltasProfessores[professor].size === 0) {
            delete faltasProfessores[professor];
        }
    }
    
    // Salvar no localStorage
    localStorage.setItem('faltasProfessores', JSON.stringify(
        Object.fromEntries(
            Object.entries(faltasProfessores).map(([prof, dias]) => [prof, Array.from(dias)])
        )
    ));
    
    // Atualizar visual da grade
    atualizarVisualFaltas();
    
    mostrarNotificacao(`Falta removida para ${professor} na ${dia}`, 'success');
}

// Função para atualizar visual das faltas na grade
function atualizarVisualFaltas() {
    // Remover todas as classes de falta existentes
    document.querySelectorAll('.falta-professor').forEach(cell => {
        cell.classList.remove('falta-professor');
    });
    
    // Aplicar classes de falta onde necessário
    Object.entries(faltasProfessores).forEach(([professor, dias]) => {
        dias.forEach(dia => {
            // Encontrar todas as células deste professor neste dia
            const cells = document.querySelectorAll(`[data-professor="${professor}"][data-dia="${dia}"]`);
            cells.forEach(cell => {
                cell.classList.add('falta-professor');
            });
        });
    });
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

// Função para mostrar notificação
function mostrarNotificacao(mensagem, tipo = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensagem;
    
    container.appendChild(toast);
    
    // Remover após 3 segundos
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Função para configurar eventos dos modais
function configurarModais() {
    // Modal Marcar Falta
    const marcarFaltasBtn = document.getElementById('marcarFaltasBtn');
    const modalMarcarFalta = document.getElementById('modalMarcarFalta');
    const closeMarcarFalta = document.getElementById('closeMarcarFalta');
    const confirmarMarcarFalta = document.getElementById('confirmarMarcarFalta');
    
    if (marcarFaltasBtn) {
        marcarFaltasBtn.addEventListener('click', () => {
            modalMarcarFalta.style.display = 'flex';
        });
    }
    
    if (closeMarcarFalta) {
        closeMarcarFalta.addEventListener('click', () => {
            modalMarcarFalta.style.display = 'none';
        });
    }
    
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
                mostrarNotificacao('Por favor, selecione o professor e o dia', 'error');
            }
        });
    }
    
    // Modal Remover Falta
    const removerFaltasBtn = document.getElementById('removerFaltasBtn');
    const modalRemoverFalta = document.getElementById('modalRemoverFalta');
    const closeRemoverFalta = document.getElementById('closeRemoverFalta');
    const confirmarRemoverFalta = document.getElementById('confirmarRemoverFalta');
    
    if (removerFaltasBtn) {
        removerFaltasBtn.addEventListener('click', () => {
            modalRemoverFalta.style.display = 'flex';
        });
    }
    
    if (closeRemoverFalta) {
        closeRemoverFalta.addEventListener('click', () => {
            modalRemoverFalta.style.display = 'none';
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
                mostrarNotificacao('Por favor, selecione o professor e o dia', 'error');
            }
        });
    }
    
    // Modal Editar Horários
    const editarHorariosBtn = document.getElementById('editarHorariosBtn');
    const modalEditarHorarios = document.getElementById('modalEditarHorarios');
    const closeEditarHorarios = document.getElementById('closeEditarHorarios');
    const confirmarEditarHorario = document.getElementById('confirmarEditarHorario');
    const turmaEditarModal = document.getElementById('turmaEditarModal');
    
    if (editarHorariosBtn) {
        editarHorariosBtn.addEventListener('click', () => {
            modalEditarHorarios.style.display = 'flex';
        });
    }
    
    if (closeEditarHorarios) {
        closeEditarHorarios.addEventListener('click', () => {
            modalEditarHorarios.style.display = 'none';
        });
    }
    
    if (turmaEditarModal) {
        turmaEditarModal.addEventListener('change', (e) => {
            popularDropdownHorarios(e.target.value);
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
                // Criar estrutura se não existir
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
                
                modalEditarHorarios.style.display = 'none';
                mostrarNotificacao('Horário alterado com sucesso!', 'success');
                
                // Limpar campos
                document.getElementById('turmaEditarModal').value = '';
                document.getElementById('diaEditarModal').value = 'Segunda-feira';
                document.getElementById('horarioEditarModal').value = '';
                document.getElementById('novaMateriaModal').value = '';
                document.getElementById('novoProfessorModal').value = '';
                
                // Atualizar grade se estiver visualizando a turma alterada
                if (turmaAtual === turma) {
                    exibirGradeHoraria(turma, tipoUsuario);
                }
                
                // Atualizar dropdown de professores
                popularDropdownProfessores();
            } else {
                mostrarNotificacao('Por favor, preencha todos os campos', 'error');
            }
        });
    }
    
    // Fechar modais clicando fora
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Função para exibir grade horária
function exibirGradeHoraria(nomeTurma, tipo) {
    turmaAtual = nomeTurma;
    tipoUsuario = tipo;
    
    const gradeContainer = document.getElementById('gradeHoraria');
    const gradeTableBody = document.getElementById('gradeTableBody');
    
    if (!gradeContainer || !gradeTableBody) {
        console.error('Elementos da grade não encontrados');
        return;
    }
    
    // Mostrar container da grade
    gradeContainer.style.display = 'block';
    
    // Atualizar título
    const tituloGrade = document.querySelector('.grade-title');
    if (tituloGrade) {
        tituloGrade.textContent = `Grade Horária - ${nomeTurma}`;
    }
    
    // Verificar se a turma tem grade definida
    const gradeTurma = gradesHorarias[nomeTurma];
    
    if (!gradeTurma) {
        // Turma sem grade definida
        gradeTableBody.innerHTML = `
            <tr>
                <td colspan="6" class="info-box">
                    <strong>Grade não preenchida</strong><br>
                    Esta turma ainda não tem horários definidos.<br>
                    <small>Para preencher, edite o arquivo script.js na função inicializarGrades()</small>
                </td>
            </tr>
        `;
        return;
    }
    
    // Determinar horários da turma
    let horariosParaTurma = [];
    if (turmas.manha.includes(nomeTurma)) {
        horariosParaTurma = horarios.manha;
    } else if (turmas.tarde.includes(nomeTurma)) {
        horariosParaTurma = horarios.tarde;
    } else if (turmas.noite.includes(nomeTurma)) {
        horariosParaTurma = horarios.noite;
    }
    
    // Limpar tabela
    gradeTableBody.innerHTML = '';
    
    // Preencher tabela
    horariosParaTurma.forEach(horario => {
        const row = document.createElement('tr');
        
        // Coluna do horário
        const horarioCell = document.createElement('td');
        horarioCell.className = 'horario-cell';
        horarioCell.textContent = horario;
        row.appendChild(horarioCell);
        
        // Colunas dos dias
        const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
        
        diasSemana.forEach(dia => {
            const cell = document.createElement('td');
            cell.className = 'aula-cell';
            
            // Adicionar atributos de dados para controle de faltas
            const aula = gradeTurma[dia] && gradeTurma[dia][horario];
            if (aula) {
                cell.setAttribute('data-professor', aula.professor);
                cell.setAttribute('data-dia', dia);
                
                cell.innerHTML = `
                    <div class="materia">${aula.materia}</div>
                    <div class="professor">${aula.professor}</div>
                `;
            } else {
                cell.innerHTML = `
                    <div class="materia">--</div>
                    <div class="professor">--</div>
                `;
            }
            
            row.appendChild(cell);
        });
        
        gradeTableBody.appendChild(row);
    });
    
    // Atualizar visual das faltas
    atualizarVisualFaltas();
    
    // Configurar seletor de dias para alunos
    if (tipo === 'aluno') {
        configurarSeletorDias();
    }
    
    // Mostrar funções do pedagogo se for pedagogo
    if (tipo === 'pedagogo') {
        const pedagogoFunctions = document.getElementById('pedagogoFunctionsTop');
        if (pedagogoFunctions) {
            pedagogoFunctions.style.display = 'block';
        }
    }
}

// Função para configurar seletor de dias
function configurarSeletorDias() {
    const botoesDias = document.querySelectorAll('.day-btn');
    
    botoesDias.forEach(botao => {
        botao.addEventListener('click', (e) => {
            // Remover classe ativa de todos os botões
            botoesDias.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe ativa ao botão clicado
            e.target.classList.add('active');
            
            // Atualizar dia atual
            diaAtual = e.target.dataset.dia;
            
            // Destacar coluna do dia selecionado
            destacarColunaDia(diaAtual);
        });
    });
    
    // Destacar primeira coluna por padrão
    if (botoesDias.length > 0) {
        botoesDias[0].classList.add('active');
        destacarColunaDia('Segunda-feira');
    }
}

// Função para destacar coluna do dia
function destacarColunaDia(dia) {
    // Remover destaque de todas as colunas
    document.querySelectorAll('.day-highlight').forEach(col => {
        col.classList.remove('day-highlight');
    });
    
    // Mapear dias para índices de coluna
    const diasIndices = {
        'Segunda-feira': 1,
        'Terça-feira': 2,
        'Quarta-feira': 3,
        'Quinta-feira': 4,
        'Sexta-feira': 5
    };
    
    const indiceColuna = diasIndices[dia];
    if (indiceColuna) {
        // Destacar cabeçalho
        const header = document.querySelector(`th:nth-child(${indiceColuna + 1})`);
        if (header) {
            header.classList.add('day-highlight');
        }
        
        // Destacar todas as células da coluna
        const cells = document.querySelectorAll(`td:nth-child(${indiceColuna + 1})`);
        cells.forEach(cell => {
            if (!cell.classList.contains('horario-cell')) {
                cell.classList.add('day-highlight');
            }
        });
    }
}

// Função para buscar turmas
function configurarBuscaTurmas() {
    const campoBusca = document.getElementById('buscaTurma');
    const botoesTurmas = document.querySelectorAll('.turma-btn');
    
    if (campoBusca) {
        campoBusca.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            
            botoesTurmas.forEach(botao => {
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

// Função para configurar botões de turma
function configurarBotoesTurma() {
    const botoesTurmas = document.querySelectorAll('.turma-btn');
    
    botoesTurmas.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const nomeTurma = e.target.textContent;
            exibirGradeHoraria(nomeTurma, tipoUsuario);
        });
    });
}

// Função de inicialização
function inicializar() {
    // Obter parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const turma = urlParams.get('turma');
    const tipo = urlParams.get('tipo');
    
    if (turma && tipo) {
        tipoUsuario = tipo;
        
        // Inicializar dados
        inicializarGrades();
        carregarFaltas();
        
        // Configurar interface
        if (tipo === 'pedagogo') {
            popularDropdownProfessores();
            popularDropdownTurmas();
            configurarModais();
        }
        
        configurarBuscaTurmas();
        configurarBotoesTurma();
        
        // Exibir grade
        exibirGradeHoraria(turma, tipo);
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', inicializar);

