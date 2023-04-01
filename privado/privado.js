const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Hemograma', 'perfil lipídico', 'Colesterol', 'Triglicéridos', 'Orina', 'Perfil bioquímico', 'Coagulación'],
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
    labels: ['Hemograma', 'Perfil lipídico', 'Colesterol', 'Triglicéridos', 'Orina', 'Perfil bioquímico', 'Coagulación'],
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

new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['Hemograma', 'perfil lipídico', 'Colesterol', 'Triglicéridos', 'Orina', 'Perfil bioquímico', 'Coagulación'],
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

new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['Hemograma', 'perfil lipídico', 'Colesterol', 'Triglicéridos', 'Orina', 'Perfil bioquímico', 'Coagulación'],
    datasets: [{
      label: 'Cantidad de Examenes realizados en Marzo',
      data: [3, 19, 23, 6, 18, 13],
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