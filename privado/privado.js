const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Hemograma, perfil lipídico', 'Colesterol', 'Triglicéridos', 'Orina', 'Perfil bioquímico', 'Coagulación'],
    datasets: [{
      label: 'Cantidad de Examenes realizados en Marzo',
      data: [12, 19, 3, 5, 2, 13],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Hemograma, perfil lipídico', 'Colesterol', 'Triglicéridos', 'Orina', 'Perfil bioquímico', 'Coagulación'],
    datasets: [{
      label: 'Cantidad de Examenes realizados en Marzo',
      data: [18, 19, 3, 5, 2, 13],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});