document.addEventListener('DOMContentLoaded', () => {
  // Кнопка печати
  document.getElementById("print-button").addEventListener("click", () => {
  // Открываем страницу №2 — например, form.html
  const printWindow = window.open("pdf-content.html", "_blank");

  // После загрузки контента вызываем печать
  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print(); // вызывает системную печать с возможностью сохранения PDF
  };
});


  // === Стресс ===
  const stressRange = document.getElementById('stress_level');
  const stressDisplay = document.getElementById('valueDisplay');

  const stressStates = {
    1: { text: "😌 Минимальный уровень стресса", color: "#74c69d" },
    2: { text: "🙂 Низкий стресс", color: "#a5c974" },
    3: { text: "😐 Умеренный стресс", color: "#f5c542" },
    4: { text: "😟 Высокий стресс", color: "#f28e2b" },
    5: { text: "😣 Постоянный ежедневный стресс", color: "#e76f51" }
  };

  const updateStress = (value) => {
    const numeric = parseInt(value);
    const percent = ((numeric - parseInt(stressRange.min)) /
                    (parseInt(stressRange.max) - parseInt(stressRange.min))) * 100;

    const state = stressStates[numeric];
    if (state) {
      stressRange.style.background = `linear-gradient(to right, ${state.color} ${percent}%, #ccc ${percent}%)`;
      stressDisplay.textContent = state.text;
      stressDisplay.style.color = state.color;
    }
  };

  if (stressRange && stressDisplay) {
    updateStress(stressRange.value);
    stressRange.addEventListener('input', e => updateStress(e.target.value));
  }

  // === Энергия ===
  const energyRange = document.getElementById('energy_level');
  const energyDisplay = document.getElementById('energyDisplay');

  const energyStates = {
    1: { text: '🙁 Низкий — вообще нет энергии', color: '#e76f51' },
    2: { text: '😕 Пониженный — энергии хватает на пару часов', color: '#f28482' },
    3: { text: '😐 Средний — энергии хватает на половину дня', color: '#f5c542' },
    4: { text: '🙂 Повышенный — начинаю уставать ближе к вечеру', color: '#a8dadc' },
    5: { text: '😄 Высокий — энергии хватает на весь день', color: '#74c69d' }
  };

 const updateEnergy = (value) => {
  const numericValue = parseInt(value);
  const percent = ((numericValue - parseInt(energyRange.min)) /
                   (parseInt(energyRange.max) - parseInt(energyRange.min))) * 100;

  const state = energyStates[numericValue];
  if (state) {
    // Цвет слайдера — градиент
    energyRange.style.background = `linear-gradient(to right, ${state.color} ${percent}%, #ccc ${percent}%)`;

    // Только текст и цвет текста
    energyDisplay.textContent = state.text;
    energyDisplay.style.color = state.color;

    // Без фонов, без анимаций
    energyDisplay.style.backgroundColor = 'transparent';
  }
};


  if (energyRange && energyDisplay) {
    updateEnergy(energyRange.value);
    energyRange.addEventListener('input', e => updateEnergy(e.target.value));
  }
});

// Слайдер активности

document.addEventListener('DOMContentLoaded', () => {
  // === Активность ===
  const activityRange = document.getElementById('activity_level');
  const activityDisplay = document.getElementById('activityDisplay');

  const activityStates = {
    1: { text: '🛌 Малоподвижный — преимущественно сидячий образ жизни', color: '#e76f51' },
    2: { text: '🚶‍♂️ Умеренная активность — немного движения', color: '#f28482' },
    3: { text: '🚴 Средняя активность — сбалансированный ритм', color: '#f5c542' },
    4: { text: '🤸‍♀️ Активный — регулярные занятия спортом', color: '#a8dadc' },
    5: { text: '🏋️‍♂️ Высокоактивный — интенсивные нагрузки и движение', color: '#74c69d' }
  };

  const updateActivity = (value) => {
    const numericValue = parseInt(value);
    const percent = ((numericValue - parseInt(activityRange.min)) /
                    (parseInt(activityRange.max) - parseInt(activityRange.min))) * 100;

    const state = activityStates[numericValue];
    if (state) {
      activityRange.style.background = `linear-gradient(to right, ${state.color} ${percent}%, #ccc ${percent}%)`;
      activityDisplay.textContent = state.text;
      activityDisplay.style.color = state.color;
      activityDisplay.style.backgroundColor = 'transparent';
    }
  };

  if (activityRange && activityDisplay) {
    updateActivity(activityRange.value);
    activityRange.addEventListener('input', e => updateActivity(e.target.value));
  }

  // здесь остаются код для энергии и стресса — ты уже настроил их идеально!
});

