const dados_idade = document.getElementById('mychart_idade')

new mychart_idade(dados_idade, {
    type: 'pie',
    data: {
        labels: ['0-18', '19-30', '31-90'],
        datasets: [{
            label: 'my first time',
            data: [1, 2, 3],
            backgroundColor: [
                'rgb(89, 192, 75)',
                'rgb(29, 112, 35)',
                'rgb(180, 60, 40)'
            ]
        }]
    }
})