document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { title: "Desenvolvimento Web Full Stack", description: "Aprenda a criar websites e aplicações web completas." },
        { title: "Data Science e Análise de Dados", description: "Análise e visualização de dados usando Python e R." },
        { title: "Inteligência Artificial e Machine Learning", description: "Fundamentos e aplicações de IA e ML." },
        { title: "Desenvolvimento de Aplicações Mobile", description: "Criação de aplicativos para Android e iOS." },
        { title: "Segurança da Informação", description: "Práticas e técnicas para proteger dados e sistemas." },
        { title: "DevOps e CI/CD", description: "Integração e entrega contínua em projetos de software." },
        { title: "Design de Interface e UX", description: "Princípios de design para criar interfaces atraentes e funcionais." },
        { title: "Banco de Dados SQL e NoSQL", description: "Gerenciamento e manipulação de diferentes tipos de bancos de dados." },
        { title: "Programação em Python", description: "Fundamentos e técnicas avançadas em Python." },
        { title: "Desenvolvimento de Jogos", description: "Criação de jogos usando motores de jogo e programação." },
        { title: "Computação em Nuvem", description: "Uso de serviços em nuvem para armazenar e gerenciar dados." },
        { title: "Blockchain e Criptomoedas", description: "Tecnologias e conceitos por trás das criptomoedas." },
        { title: "Arquitetura de Software", description: "Projetando e construindo sistemas de software escaláveis." },
        { title: "Automação de Testes", description: "Automatizando o processo de testes de software." },
        { title: "Programação em JavaScript", description: "Desenvolvimento web com JavaScript." },
        { title: "Análise de Sistemas", description: "Estudo e design de sistemas de software." },
        { title: "Redes e Comunicações", description: "Fundamentos das redes de computadores e suas aplicações." },
        { title: "Computação Gráfica", description: "Criação e manipulação de imagens e gráficos computacionais." },
        { title: "Metodologias Ágeis", description: "Métodos ágeis para gerenciar projetos de software." },
        { title: "Desenvolvimento de APIs", description: "Criação e consumo de APIs RESTful." },
        { title: "Programação em Java", description: "Desenvolvimento de software usando a linguagem Java." }
    ];

    function displayCourses(courses) {
        const coursesList = document.getElementById('courses-list');
        coursesList.innerHTML = '';

        courses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            courseItem.innerHTML = `
                <div class="course-title">${course.title}</div>
                <div class="course-description">${course.description}</div>
            `;
            coursesList.appendChild(courseItem);
        });
    }

    document.querySelector('#btSearch').addEventListener('click', ()=>{

        const searchQuery = document.getElementById('search').value.toLowerCase();
        const filteredCourses = courses.filter(course =>
            course.title.toLowerCase().includes(searchQuery) ||
            course.description.toLowerCase().includes(searchQuery)
        );
        displayCourses(filteredCourses);
    });
    displayCourses(courses);
});
