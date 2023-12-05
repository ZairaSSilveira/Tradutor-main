function Escolher(idioma) {
    var conteudos = {
        "paragrafo1": {
            "ptbr": "Inicialmente fizemos uma análise detalhada em cada componente do site para que qualquer erro fosse resolvido por nós. ",
            "es": "Inicialmente, realizamos un análisis detallado de cada componente del sitio web para que cualquier error pudiera ser solucionado por nosotros.",
            "en": "Initially, we performed a detailed analysis of each component of the website so that any errors could be fixed by us."
        },
        "paragrafo2": {
            "ptbr": "O trabalho tem como tema “Joias sustentáveis - Loja que ajuda o meio ambiente”, a loja escolhida foi a JGZGJ tivemos o princípio em Refazer o site deles para melhoria; ",
            "es": "El tema del trabajo es “Joyas sustentables - Tienda que ayuda al medio ambiente”, la tienda elegida fue JGZGJ, comenzamos rehaciendo su sitio web para mejorar;",
            "en": "The work's theme is “Sustainable jewelry - Store that helps the environment”, the store chosen was JGZGJ, we started by redoing their website for improvement;."
        },
        "paragrafo3": {
            "ptbr": "Como resultado das análises obtemos diversos erros que serão abordados ao longo do trabalho; priorizamos mudanças essenciais que se fossem adotadas a loja teria mais visibilidade e com certeza melhoraria a experiência dos clientes.",
            "es": "Como resultado del análisis obtuvimos varios errores que serán abordados a lo largo del trabajo; Priorizamos cambios esenciales que, de adoptarse, la tienda tendría más visibilidad y sin duda mejorarían la experiencia del cliente.",
            "en": "As a result of the analysis, we obtained several errors that will be addressed throughout the work; We prioritized essential changes that if they were adopted, the store would have more visibility and would certainly improve the customer experience."
        },
        "paragrafo4": {
            "ptbr": "A joalheria JGZGJ foi fundada com o intuito de diminuir a extração de minerios preciosos da natureza, JGZGJ é uma marca de joias voltada para uma geração que busca algo além de tendência, mas uma forma de se expressar com atitude e sustentabibilade.",
            "es": "JGZGJ joyería fue fundada con el objetivo de reducir la extracción de minerales preciosos de la naturaleza, JGZGJ es una marca de joyería dirigida a una generación que busca algo más allá de las tendencias, sino una forma de expresarse con actitud y sostenibilidad.",
            "en": "JGZGJ jewelry was founded with the aim of reducing the extraction of precious minerals from nature, JGZGJ is a jewelry brand aimed at a generation that is looking for something beyond trends, but a way of expressing themselves with attitude and sustainability."
        },
        "paragrafo5": {
            "ptbr": "O principal motivo de escolhermos a joalheria JGZGJ é a sua proposta, pois se trata de uma loja de joias 100% sustentável diferente das outras lojas desse nicho; A marca inova em diversos sentidos principalmente por quebrar estigmas de que joias são feitas com a exploração da natureza usando materias sustentáveis para mostrar o contrário.",
            "es": "La razón principal por la que elegimos joyería JGZGJ es su propuesta, ya que es una joyería 100% sustentable diferente a otras tiendas de este nicho; La marca innova de varias maneras, principalmente rompiendo los estigmas de que las joyas se fabrican explotando la naturaleza utilizando materiales sostenibles para mostrar lo contrario.",
            "en": "The main reason we chose JGZGJ jewelry is its proposal, as it is a 100% sustainable jewelry store different from other stores in this niche; The brand innovates in several ways, mainly by breaking stigmas that jewelry is made by exploiting nature using sustainable materials to show the opposite."
        }
    };

    // Atualiza o conteúdo dos parágrafos com base no idioma selecionado
    document.getElementById('paragrafo1').innerHTML = conteudos['paragrafo1'][idioma];
    document.getElementById('paragrafo2').innerHTML = conteudos['paragrafo2'][idioma];
    document.getElementById('paragrafo3').innerHTML = conteudos['paragrafo3'][idioma];
    document.getElementById('paragrafo4').innerHTML = conteudos['paragrafo4'][idioma];
    document.getElementById('paragrafo5').innerHTML = conteudos['paragrafo5'][idioma];
}