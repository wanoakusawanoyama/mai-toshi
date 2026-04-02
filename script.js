
/* --------------------モーダル---------------------- */
let currentDate = new Date(); // 初期は今月

// 日本の祝日（簡略例） key: 'YYYY-MM-DD'
const holidays = {
  "2026-01-12": "成人の日",
  "2026-02-11": "建国記念の日",
  "2026-02-23": "天皇誕生日",
  "2026-03-20": "春分の日",
  "2026-04-29": "昭和の日",
  "2026-05-03": "憲法記念日",
  "2026-05-04": "みどりの日",
  "2026-05-05": "こどもの日",
  "2026-05-06": "振替休日",
  "2026-07-20": "海の日",
  "2026-08-11": "山の日",
  "2026-09-21": "敬老の日",
  "2026-09-23": "秋分の日",
  "2026-10-12": "スポーツの日",
  "2026-11-03": "文化の日",
  "2026-11-23": "勤労感謝の日"
};

function generateCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const calendarBody = document.getElementById("calendarBody");
  const currentMonth = document.getElementById("currentMonth");
  calendarBody.innerHTML = "";

  currentMonth.textContent = `${year}年 ${month + 1}月`;

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  let row = document.createElement("tr");

  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  for (let dateNum = 1; dateNum <= lastDate; dateNum++) {
    const cell = document.createElement("td");
    const cellDate = new Date(year, month, dateNum);
    const day = cellDate.getDay(); // 曜日
    const ymd = `${year}-${String(month + 1).padStart(2, '0')}-${String(dateNum).padStart(2, '0')}`;

    cell.textContent = dateNum;

    // 土日クラス追加
    if (day === 0) cell.classList.add("sun");
    if (day === 6) cell.classList.add("sat");

    // 祝日
    if (holidays[ymd]) {
      cell.classList.add("holiday");
      cell.innerHTML += `<br><small>${holidays[ymd]}</small>`;
    }

    // ここに↓予約可能日時を足していく
    const events = {
  "2026-05-21": "17:00-19:00",
  "2026-05-22": "17:00-19:00",
  "2026-06-02": "14:00-16:00"
};

    if (events[ymd]) {
  cell.classList.add("event-day");
  cell.innerHTML += `<br><small>${events[ymd]}</small>`;
}

    row.appendChild(cell);

    if ((firstDay + dateNum) % 7 === 0 || dateNum === lastDate) {
      calendarBody.appendChild(row);
      row = document.createElement("tr");
    }
  }
}

document.getElementById("openCalendarBtn").addEventListener("click", () => {
  document.getElementById("calendarModal").style.display = "block";
  generateCalendar(currentDate);
});

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("calendarModal").style.display = "none";
});

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar(currentDate);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar(currentDate);
});
/* --------------------モーダル---------------------- */

/* --------------------花びら---------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("#lesson .petal-container");

    function createPetal() {
      const petal = document.createElement("div");
      petal.classList.add("petal");

      // 横方向のランダム位置
      petal.style.left = Math.random() * 100 + "%";

      // アニメーション速度やタイミングをランダムに調整
      const duration = Math.random() * 5 + 5; // 5〜10秒
      const delay = Math.random() * 5;

      petal.style.animationDuration = `${duration}s`;
      petal.style.animationDelay = `${delay}s`;

      container.appendChild(petal);

      // 花びらを一定時間後に削除
      setTimeout(() => {
        petal.remove();
      }, (duration + delay) * 1000);
    }

    // 一定間隔で花びらを生成
    setInterval(createPetal, 500);
  });
/* --------------------花びら---------------------- */
/* --------------------水玉---------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const bubbleContainer = document.querySelector(".bubbles");

    function createBubble() {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.left = Math.random() * 100 + "%";
      bubble.style.width = bubble.style.height = Math.random() * 10 + 10 + "px";
      bubble.style.animationDuration = Math.random() * 5 + 3 + "s";

      bubbleContainer.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 8000); // 終了後に削除
    }

    // 一定間隔で泡を生成
    setInterval(createBubble, 300);
  });
  /* --------------------水玉---------------------- */


  /* --------------------つなぎ---------------------- */

const items = document.querySelectorAll('.tunagi div, .tunagi2 div');

items.forEach(item => {
  animateItem(item);
});

function animateItem(item) {
  const delay = Math.random() * 2000 + 1000;

  setTimeout(() => {
    // 消える or 出る
    if (Math.random() > 0.5) {
      item.classList.toggle('is-hidden');
    }

    // たまに強調（ふわっと拡大）
    if (Math.random() > 0.7) {
      item.classList.add('is-active');

      setTimeout(() => {
        item.classList.remove('is-active');
      }, 800);
    }

    // ループ
    animateItem(item);

  }, delay);
}

/* --------------------つなぎ　ここまで---------------------- */

/* --------------------グッズ---------------------- */

function openModal(type) {
  const text = {
    pinkdress: "オーダーメイド\n\n踊るとTOSHIの美顔が現れます\n\n¥応相談",
    akadress: "オーダーメイド\n\n踊るとシングル曲名が現れます\n\n¥応相談",
    pinkaccessory: "ヘアアクセサリー\n\n （ピンク）TOSHIロゴ\n\n¥20,000",
    akaaccessory: "ヘアアクセサリー\n\n（赤）TOSHIロゴ\n\n¥20,000",
    pinkbag: "シューズバッグ\n\nカーニバルレジェンド笑顔\n\n¥2,000",
    akabag: "シューズバッグ\n\nハッとしてレジェンド柄\n\n¥2,000",
  };

  document.getElementById("modal2-text").innerText = text[type];
  document.getElementById("modal2").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal2").style.display = "none";
}

window.addEventListener("scroll", function() {
  const msg = document.querySelector(".message");
  const trigger = window.innerHeight * 0.8;

  const rect = msg.getBoundingClientRect().top;

  if (rect < trigger) {
    msg.classList.add("show");
  }
});

/* --------------------グッズ　ここまで---------------------- */


/* ------------------- TOSHIメッセージ --------------------- */

const text = document.getElementById('toshiText');
const box = document.getElementById('toshiMessage');

let state = 0;

box.addEventListener('click', () => {

  text.classList.add('fade-out');

  setTimeout(() => {
    if (state === 0) {
      text.innerHTML = `
        <br><br>
        …また一緒に踊ろ。
      `;
      state = 1;
    } else {
      text.innerHTML = `
        レジェンドインストラクターTOSHI より<br><br>
        うまく踊れなくてもいい。<br><br>
        楽しめ。
      `;
      state = 0;
    }

    text.classList.remove('fade-out');
    text.classList.add('fade-in');

  }, 600);
});
/* ------------------- TOSHIメッセージ ここまで--------------------- */

