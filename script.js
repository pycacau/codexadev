// Navegação Mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll suave e highlight de seção ativa
const sections = document.querySelectorAll('.section, .hero');
const navLinksArray = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Sistema de Orçamento
const orcamentoForm = document.getElementById('orcamentoForm');
const formSteps = document.querySelectorAll('.form-step');
const btnProximo = document.getElementById('btnProximo');
const btnAnterior = document.getElementById('btnAnterior');
const btnEnviar = document.getElementById('btnEnviar');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const resumoContainer = document.getElementById('resumoContainer');
const valorEstimado = document.getElementById('valorEstimado');

let currentStep = 1;
const totalSteps = 9;

// Valores base para cálculo
const precos = {
    tipoProjeto: {
        'site-institucional': 2000,
        'ecommerce': 5000,
        'sistema': 8000,
        'landing-page': 1500
    },
    numeroPaginas: {
        '1-3': 0,
        '4-7': 1000,
        '8-15': 2500,
        '15+': 4000
    },
    tipoDesign: {
        'template': 0,
        'custom': 2000
    },
    funcionalidades: {
        'formulario-contato': 200,
        'blog': 800,
        'galeria': 400,
        'chat': 1000,
        'agendamento': 1500,
        'area-membros': 2000,
        'integracao-redes-sociais': 500,
        'multilinguagem': 1200
    },
    prazo: {
        'urgente': 1500,
        'normal': 0,
        'flexivel': -500
    },
    manutencao: {
        'sim': 500,
        'nao': 0
    }
};

// Navegação entre steps
function updateStep(step) {
    formSteps.forEach((s, index) => {
        s.classList.remove('active');
        if (index + 1 === step) {
            s.classList.add('active');
        }
    });

    // Atualizar progresso
    const progress = (step / totalSteps) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = step < totalSteps ? `Pergunta ${step} de ${totalSteps - 1}` : 'Resumo';

    // Mostrar/ocultar botões
    btnAnterior.style.display = step > 1 ? 'block' : 'none';
    btnProximo.style.display = step < totalSteps ? 'block' : 'none';
    btnEnviar.style.display = step === totalSteps ? 'block' : 'none';

    // Se for o último step, calcular e mostrar resumo
    if (step === totalSteps) {
        calcularOrcamento();
    }
}

function validateStep(step) {
    const currentStepElement = formSteps[step - 1];
    const requiredInputs = currentStepElement.querySelectorAll('[required]');
    let isValid = true;

    requiredInputs.forEach(input => {
        if (input.type === 'radio' || input.type === 'checkbox') {
            const name = input.name;
            const checked = currentStepElement.querySelector(`[name="${name}"]:checked`);
            if (!checked) {
                isValid = false;
            }
        } else {
            if (!input.value.trim()) {
                isValid = false;
            }
        }
    });

    // Validação especial para step 4 (funcionalidades)
    if (step === 4) {
        const checked = currentStepElement.querySelectorAll('[name="funcionalidades"]:checked');
        if (checked.length === 0) {
            isValid = false;
        }
    }

    return isValid;
}

btnProximo.addEventListener('click', () => {
    if (validateStep(currentStep)) {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStep(currentStep);
            window.scrollTo({ top: document.getElementById('orcamento').offsetTop - 100, behavior: 'smooth' });
        }
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

btnAnterior.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateStep(currentStep);
        window.scrollTo({ top: document.getElementById('orcamento').offsetTop - 100, behavior: 'smooth' });
    }
});

// Calcular orçamento
function calcularOrcamento() {
    const formData = new FormData(orcamentoForm);
    let valorTotal = 0;
    const resumo = [];

    // Tipo de projeto
    const tipoProjeto = formData.get('tipoProjeto');
    if (tipoProjeto) {
        valorTotal += precos.tipoProjeto[tipoProjeto];
        resumo.push({
            label: 'Tipo de Projeto',
            valor: tipoProjeto.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
        });
    }

    // Número de páginas
    const numeroPaginas = formData.get('numeroPaginas');
    if (numeroPaginas) {
        valorTotal += precos.numeroPaginas[numeroPaginas];
        resumo.push({
            label: 'Número de Páginas',
            valor: numeroPaginas
        });
    }

    // Tipo de design
    const tipoDesign = formData.get('tipoDesign');
    if (tipoDesign) {
        valorTotal += precos.tipoDesign[tipoDesign];
        resumo.push({
            label: 'Tipo de Design',
            valor: tipoDesign === 'template' ? 'Template Personalizado' : 'Design Customizado'
        });
    }

    // Funcionalidades
    const funcionalidades = formData.getAll('funcionalidades');
    if (funcionalidades.length > 0) {
        let funcValor = 0;
        const funcNomes = funcionalidades.map(f => {
            funcValor += precos.funcionalidades[f];
            return f.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        });
        valorTotal += funcValor;
        resumo.push({
            label: 'Funcionalidades',
            valor: funcNomes.join(', ')
        });
    }

    // Prazo
    const prazo = formData.get('prazo');
    if (prazo) {
        valorTotal += precos.prazo[prazo];
        resumo.push({
            label: 'Prazo',
            valor: prazo === 'urgente' ? 'Urgente (até 2 semanas)' : 
                   prazo === 'normal' ? 'Normal (3-6 semanas)' : 
                   'Flexível (7+ semanas)'
        });
    }

    // Manutenção
    const manutencao = formData.get('manutencao');
    if (manutencao) {
        valorTotal += precos.manutencao[manutencao];
        resumo.push({
            label: 'Manutenção',
            valor: manutencao === 'sim' ? 'Sim' : 'Não'
        });
    }

    // Dados de contato
    resumo.push({
        label: 'Nome',
        valor: formData.get('nome') || 'Não informado'
    });
    resumo.push({
        label: 'E-mail',
        valor: formData.get('email') || 'Não informado'
    });
    resumo.push({
        label: 'Telefone',
        valor: formData.get('telefone') || 'Não informado'
    });
    resumo.push({
        label: 'Empresa',
        valor: formData.get('empresa') || 'Não informado'
    });

    // Observações
    const observacoes = formData.get('observacoes');
    if (observacoes) {
        resumo.push({
            label: 'Observações',
            valor: observacoes
        });
    }

    // Exibir resumo
    resumoContainer.innerHTML = resumo.map(item => `
        <div class="resumo-item">
            <strong>${item.label}:</strong>
            <span>${item.valor}</span>
        </div>
    `).join('');

    // Exibir valor
    valorEstimado.textContent = `R$ ${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Enviar formulário
orcamentoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(orcamentoForm);
    const data = {
        tipoProjeto: formData.get('tipoProjeto'),
        numeroPaginas: formData.get('numeroPaginas'),
        tipoDesign: formData.get('tipoDesign'),
        funcionalidades: formData.getAll('funcionalidades').join(', '),
        prazo: formData.get('prazo'),
        manutencao: formData.get('manutencao'),
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        empresa: formData.get('empresa') || 'Não informado',
        observacoes: formData.get('observacoes') || 'Nenhuma observação',
        valorEstimado: valorEstimado.textContent
    };

    // Calcular valor final
    let valorTotal = 0;
    valorTotal += precos.tipoProjeto[data.tipoProjeto] || 0;
    valorTotal += precos.numeroPaginas[data.numeroPaginas] || 0;
    valorTotal += precos.tipoDesign[data.tipoDesign] || 0;
    data.funcionalidades.split(', ').forEach(f => {
        if (f && precos.funcionalidades[f.trim()]) {
            valorTotal += precos.funcionalidades[f.trim()];
        }
    });
    valorTotal += precos.prazo[data.prazo] || 0;
    valorTotal += precos.manutencao[data.manutencao] || 0;

    // Preparar email
    const emailBody = `
NOVO ORÇAMENTO SOLICITADO

DADOS DO CLIENTE:
Nome: ${data.nome}
E-mail: ${data.email}
Telefone: ${data.telefone}
Empresa: ${data.empresa}

DETALHES DO PROJETO:
Tipo de Projeto: ${data.tipoProjeto.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
Número de Páginas: ${data.numeroPaginas}
Tipo de Design: ${data.tipoDesign === 'template' ? 'Template Personalizado' : 'Design Customizado'}
Funcionalidades: ${data.funcionalidades || 'Nenhuma'}
Prazo: ${data.prazo === 'urgente' ? 'Urgente (até 2 semanas)' : data.prazo === 'normal' ? 'Normal (3-6 semanas)' : 'Flexível (7+ semanas)'}
Manutenção: ${data.manutencao === 'sim' ? 'Sim' : 'Não'}

OBSERVAÇÕES:
${data.observacoes}

VALOR ESTIMADO: ${valorEstimado.textContent}
`;

    // ============================================
    // CONFIGURAÇÃO DE E-MAIL - IMPORTANTE!
    // ============================================
    // Você precisa configurar o e-mail para receber os orçamentos.
    // 
    // OPÇÃO 1: FormSubmit (Recomendado - Mais Simples)
    // 1. Substitua 'seu-email@exemplo.com' abaixo pelo seu e-mail real
    // 2. O FormSubmit é gratuito e funciona sem configuração adicional
    // 3. Você receberá um e-mail de confirmação na primeira vez
    //
    // OPÇÃO 2: EmailJS (Alternativa)
    // 1. Crie uma conta em https://www.emailjs.com/
    // 2. Configure um serviço de e-mail
    // 3. Crie um template
    // 4. Descomente e configure o código EmailJS abaixo
    // ============================================
    
    try {
        // Opção 1: EmailJS (requer configuração)
        // Descomente e configure se preferir usar EmailJS:
        // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        //     to_email: 'seu-email@exemplo.com',
        //     subject: 'Novo Orçamento - Codexa',
        //     message: emailBody
        // });

        // Opção 2: FormSubmit (mais simples - funciona sem configuração)
        const formSubmit = document.createElement('form');
        formSubmit.method = 'POST';
        formSubmit.action = 'https://formsubmit.co/codexa.service@gmail.com';
        formSubmit.style.display = 'none';

        const subjectInput = document.createElement('input');
        subjectInput.type = 'hidden';
        subjectInput.name = '_subject';
        subjectInput.value = 'Novo Orçamento - Codexa';

        const messageInput = document.createElement('textarea');
        messageInput.name = 'message';
        messageInput.value = emailBody;

        const emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = '_replyto';
        emailInput.value = data.email;

        formSubmit.appendChild(subjectInput);
        formSubmit.appendChild(messageInput);
        formSubmit.appendChild(emailInput);
        document.body.appendChild(formSubmit);
        formSubmit.submit();

        // Mostrar modal de sucesso
        showSuccessModal();
        
        // Resetar formulário
        setTimeout(() => {
            orcamentoForm.reset();
            currentStep = 1;
            updateStep(currentStep);
            document.body.removeChild(formSubmit);
        }, 1000);

    } catch (error) {
        console.error('Erro ao enviar orçamento:', error);
        alert('Erro ao enviar orçamento. Por favor, entre em contato diretamente pelo e-mail codexa.service@gmail.com');
    }
});

// Modal de sucesso
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
}

// Fechar modal ao clicar fora
window.closeModal = closeModal;

// Inicializar
updateStep(1);

// Verificar se a logo carregou
window.addEventListener('load', () => {
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        logoImg.addEventListener('error', () => {
            console.log('Logo não encontrada, usando fallback SVG');
        });
        logoImg.addEventListener('load', () => {
            console.log('Logo carregada com sucesso!');
        });
    }
});

// Sistema de Carrossel
const carousels = {
    servicos: {
        track: null,
        dots: null,
        currentIndex: 0,
        itemsPerView: 3,
        totalItems: 0
    },
    projetos: {
        track: null,
        dots: null,
        currentIndex: 0,
        itemsPerView: 3,
        totalItems: 0
    }
};

function initCarousel(name) {
    const carousel = carousels[name];
    carousel.track = document.getElementById(`${name}Track`);
    carousel.dots = document.getElementById(`${name}Dots`);
    
    if (!carousel.track) return;
    
    const items = carousel.track.querySelectorAll(`.${name === 'servicos' ? 'servico' : 'projeto'}-card`);
    carousel.totalItems = items.length;
    
    // Ajustar items por visualização baseado no tamanho da tela
    updateItemsPerView(name);
    
    // Criar dots
    createDots(name);
    
    // Atualizar posição inicial
    updateCarouselPosition(name);
}

function updateItemsPerView(name) {
    const width = window.innerWidth;
    if (width <= 480) {
        carousels[name].itemsPerView = 1;
    } else if (width <= 1024) {
        carousels[name].itemsPerView = 2;
    } else {
        carousels[name].itemsPerView = 3;
    }
}

function createDots(name) {
    const carousel = carousels[name];
    if (!carousel.dots) return;
    
    carousel.dots.innerHTML = '';
    const totalSlides = Math.ceil(carousel.totalItems / carousel.itemsPerView);
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(name, i));
        carousel.dots.appendChild(dot);
    }
}

function updateCarouselPosition(name) {
    const carousel = carousels[name];
    if (!carousel.track) return;
    
    // Calcular a largura de cada item incluindo o gap
    const gap = 32; // 2rem em pixels (aproximado)
    const containerWidth = carousel.track.parentElement.offsetWidth;
    const itemWidth = (containerWidth / carousel.itemsPerView) - (gap * (carousel.itemsPerView - 1) / carousel.itemsPerView);
    
    // Definir largura dos cards
    const items = carousel.track.querySelectorAll(`.${name === 'servicos' ? 'servico' : 'projeto'}-card`);
    
    // Primeiro, remover altura fixa para medir
    items.forEach(item => {
        item.style.width = `${itemWidth}px`;
        item.style.height = 'auto';
    });
    
    // Encontrar a altura máxima entre os cards visíveis
    let maxHeight = 0;
    const visibleStart = carousel.currentIndex;
    const visibleEnd = Math.min(carousel.currentIndex + carousel.itemsPerView, items.length);
    
    for (let i = visibleStart; i < visibleEnd; i++) {
        if (items[i]) {
            const height = items[i].offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        }
    }
    
    // Aplicar altura máxima a todos os cards visíveis para alinhar os botões
    for (let i = visibleStart; i < visibleEnd; i++) {
        if (items[i]) {
            items[i].style.height = `${maxHeight}px`;
        }
    }
    
    const translateX = -(carousel.currentIndex * (itemWidth + gap));
    carousel.track.style.transform = `translateX(${translateX}px)`;
    
    // Atualizar dots
    updateDots(name);
}

function updateDots(name) {
    const carousel = carousels[name];
    if (!carousel.dots) return;
    
    const dots = carousel.dots.querySelectorAll('.carousel-dot');
    const currentSlide = Math.floor(carousel.currentIndex / carousel.itemsPerView);
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function moveCarousel(name, direction) {
    const carousel = carousels[name];
    if (!carousel.track) return;
    
    const maxIndex = carousel.totalItems - carousel.itemsPerView;
    
    carousel.currentIndex += direction;
    
    if (carousel.currentIndex < 0) {
        carousel.currentIndex = 0;
    } else if (carousel.currentIndex > maxIndex) {
        carousel.currentIndex = maxIndex;
    }
    
    updateCarouselPosition(name);
}

function goToSlide(name, slideIndex) {
    const carousel = carousels[name];
    carousel.currentIndex = slideIndex * carousel.itemsPerView;
    updateCarouselPosition(name);
}

// Inicializar carrosséis quando a página carregar
window.addEventListener('load', () => {
    initCarousel('servicos');
    initCarousel('projetos');
    
    // Aguardar um frame para garantir que o DOM está renderizado
    setTimeout(() => {
        updateCarouselPosition('servicos');
        updateCarouselPosition('projetos');
    }, 100);
});

// Ajustar carrosséis quando a janela for redimensionada
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateItemsPerView('servicos');
        updateItemsPerView('projetos');
        carousels.servicos.currentIndex = 0;
        carousels.projetos.currentIndex = 0;
        createDots('servicos');
        createDots('projetos');
        updateCarouselPosition('servicos');
        updateCarouselPosition('projetos');
    }, 250);
});

// Animações ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.servico-card, .projeto-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

