const lessons = [
  {
    chapter: "ch08",
    number: "02",
    title: "Nhiều DIV thật thú vị",
    description: "Làm quen với các phần tử HTML và cách trình bày nội dung.",
    file: "lab08-walkthrough02.html",
  },
  {
    chapter: "ch08",
    number: "06",
    title: "Thực hành với Object",
    description: "Tạo và sử dụng các đối tượng trong JavaScript.",
    file: "lab08-walkthrough06.html",
  },
  {
    chapter: "ch08",
    number: "07",
    title: "Thực hành với Array",
    description: "Khám phá cách lưu trữ và xử lý danh sách dữ liệu.",
    file: "lab08-walkthrough07.html",
  },
  {
    chapter: "ch08",
    number: "08",
    title: "Làm quen với Function",
    description: "Tổ chức chương trình bằng các hàm có thể tái sử dụng.",
    file: "lab08-walkthrough08.html",
  },
  {
    chapter: "ch08",
    number: "09",
    title: "Thực hành Function nâng cao",
    description: "Tiếp tục khám phá cách định nghĩa và gọi hàm.",
    file: "lab08-walkthrough09.html",
  },
  {
    chapter: "ch08",
    number: "10",
    title: "Kết hợp và sử dụng Object",
    description: "Vận dụng đối tượng để mô hình hóa dữ liệu.",
    file: "lab08-walkthrough10.html",
  },
  {
    chapter: "ch08",
    number: "11",
    title: "Bài thực hành JavaScript",
    description: "Tổng hợp kiến thức và thực hành cùng các ví dụ.",
    file: "lab08-walkthrough11.html",
  },
  {
    chapter: "ch08",
    number: "BT",
    title: "Bài tập Posts",
    description: "Xem danh sách bài viết và nội dung minh họa.",
    file: "exercise.html",
  },
  {
    chapter: "ch09",
    number: "01",
    title: "Bắt đầu với DOM",
    description: "Tìm hiểu cấu trúc DOM và cách truy cập nội dung trang.",
    file: "lab09-walkthrough01.html",
  },
  {
    chapter: "ch09",
    number: "02",
    title: "Thực hành DOM — phần 2",
    description: "Tiếp tục thao tác với các phần tử trên trang web.",
    file: "lab09-walkthrough02.html",
  },
  {
    chapter: "ch09",
    number: "03",
    title: "Thực hành DOM — phần 3",
    description: "Làm quen thêm với việc cập nhật nội dung trang.",
    file: "lab09-walkthrough03.html",
  },
  {
    chapter: "ch09",
    number: "04",
    title: "Thực hành DOM — phần 4",
    description: "Vận dụng JavaScript để tương tác với giao diện.",
    file: "lab09-walkthrough04.html",
  },
  {
    chapter: "ch09",
    number: "05",
    title: "DOM Timing",
    description: "Tìm hiểu thời điểm tải trang và chạy JavaScript.",
    file: "lab09-walkthrough05.html",
  },
  {
    chapter: "ch09",
    number: "07",
    title: "Biểu mẫu đăng ký",
    description: "Khám phá biểu mẫu và các tương tác với người dùng.",
    file: "lab09-walkthrough07.html",
  },
  {
    chapter: "ch09",
    number: "08",
    title: "Hoàn thiện biểu mẫu",
    description: "Thực hành xử lý giao diện đăng ký bằng JavaScript.",
    file: "lab09-walkthrough08.html",
  },
  {
    chapter: "ch10",
    number: "01",
    title: "jQuery — DOM Example",
    description: "Bắt đầu thực hành tương tác với DOM bằng jQuery.",
    file: "lab10-walkthrough01.html",
  },
  {
    chapter: "ch10",
    number: "03",
    title: "Biểu mẫu đăng ký với jQuery",
    description: "Thực hành biểu mẫu và tương tác trên trang web.",
    file: "lab10-walkthrough03.html",
  },
  {
    chapter: "ch10",
    number: "04",
    title: "jQuery — Walkthrough 04",
    description: "Bài thực hành tiếp theo trong chương jQuery.",
    file: "lab10-walkthrough04.html",
  },
  {
    chapter: "ch10",
    number: "05",
    title: "jQuery — Walkthrough 05",
    description: "Tiếp tục khám phá các thao tác với jQuery.",
    file: "lab10-walkthrough05.html",
  },
  {
    chapter: "ch10",
    number: "06",
    title: "jQuery — Walkthrough 06",
    description: "Vận dụng jQuery trong các ví dụ thực hành.",
    file: "lab10-walkthrough06.html",
  },
  {
    chapter: "ch10",
    number: "07",
    title: "jQuery — Walkthrough 07",
    description: "Thực hành thêm các tính năng tương tác.",
    file: "lab10-walkthrough07.html",
  },
  {
    chapter: "ch10",
    number: "08",
    title: "jQuery — Walkthrough 08",
    description: "Khám phá thêm các tiện ích của jQuery.",
    file: "lab10-walkthrough08.html",
  },
  {
    chapter: "ch10",
    number: "09",
    title: "Tải danh sách thành phố",
    description: "Dùng $.each() để hiển thị dữ liệu thành phố.",
    file: "lab10-walkthrough09.html",
  },
  {
    chapter: "ch10",
    number: "10",
    title: "jQuery — Walkthrough 10",
    description: "Hoàn thiện chuỗi bài thực hành jQuery.",
    file: "lab10-walkthrough10.html",
  },
];

const chapterPaths = {
  ch08: "Lab08/",
  ch09: "Lab09/",
  ch10: "Lab10/",
};

const lessonGrid = document.querySelector("#lesson-grid");
const lessonCount = document.querySelector("#lesson-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#lesson-search");
const filterButtons = document.querySelectorAll(".filter-button");
const lessonViewer = document.querySelector("#lesson-viewer");
const lessonFrame = document.querySelector("#lesson-frame");
const viewerTitle = document.querySelector("#viewer-title");
const viewerBack = document.querySelector("#viewer-back");

let activeFilter = "all";

function normalizeText(value) {
  return value
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function createLessonCard(lesson, index) {
  const chapterNumber = lesson.chapter.slice(-2);
  const lessonPath = `${chapterPaths[lesson.chapter]}${lesson.file}`;
  const card = document.createElement("article");
  card.className = "lesson-card";
  card.innerHTML = `
    <div class="card-topline">
      <span class="chapter-badge ${lesson.chapter}">CHƯƠNG ${chapterNumber}</span>
      <span class="lesson-number">${lesson.number === "BT" ? "BÀI TẬP" : `BÀI ${lesson.number}`}</span>
    </div>
    <h3>${lesson.title}</h3>
    <p>${lesson.description}</p>
    <a class="lesson-link" href="${lessonPath}" data-lesson-path="${lessonPath}">
      <span>Mở bài học</span><span aria-hidden="true">↗</span>
    </a>
  `;
  card.style.setProperty("--card-order", index);
  return card;
}

function findLessonByPath(path) {
  return lessons.find(
    (lesson) => `${chapterPaths[lesson.chapter]}${lesson.file}` === path,
  );
}

function showLesson(lesson) {
  const lessonPath = `${chapterPaths[lesson.chapter]}${lesson.file}`;
  viewerTitle.textContent = lesson.title;
  lessonFrame.src = lessonPath;
  if (!lessonViewer.open) {
    lessonViewer.showModal();
  }
}

function syncViewerWithLocation() {
  const params = new URLSearchParams(window.location.hash.slice(1));
  const lesson = findLessonByPath(params.get("lesson"));
  if (lesson) {
    showLesson(lesson);
    return;
  }

  if (lessonViewer.open) {
    lessonViewer.close();
    lessonFrame.removeAttribute("src");
  }
}

function renderLessons() {
  const query = normalizeText(searchInput.value.trim());
  const filteredLessons = lessons.filter((lesson) => {
    const matchesChapter = activeFilter === "all" || lesson.chapter === activeFilter;
    const searchableText = normalizeText(
      `${lesson.title} ${lesson.description} ${lesson.chapter} ${lesson.number}`,
    );
    return matchesChapter && searchableText.includes(query);
  });

  lessonGrid.replaceChildren(
    ...filteredLessons.map((lesson, index) => createLessonCard(lesson, index)),
  );
  lessonCount.textContent = filteredLessons.length;
  emptyState.hidden = filteredLessons.length > 0;
  lessonGrid.hidden = filteredLessons.length === 0;
}

lessonGrid.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-lesson-path]");
  if (!link) {
    return;
  }

  const lesson = findLessonByPath(link.dataset.lessonPath);
  if (!lesson) {
    return;
  }

  event.preventDefault();
  const lessonPath = link.dataset.lessonPath;
  window.history.pushState(
    { lessonViewer: true, lessonPath },
    "",
    `#lesson=${encodeURIComponent(lessonPath)}`,
  );
  showLesson(lesson);
});

viewerBack.addEventListener("click", () => {
  if (window.history.state && window.history.state.lessonViewer) {
    window.history.back();
    return;
  }

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
  syncViewerWithLocation();
});

lessonViewer.addEventListener("cancel", (event) => {
  event.preventDefault();
  viewerBack.click();
});

window.addEventListener("popstate", syncViewerWithLocation);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderLessons();
  });
});

searchInput.addEventListener("input", renderLessons);

renderLessons();
syncViewerWithLocation();
