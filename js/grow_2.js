function publishProReflect() {
  var proTitle = document.querySelector('.proTitle-container');
  proTitle.textContent = 'ProReflect: Title, If it\'s too I...';

  var proReflectBtn = document.querySelector('.proreflect');
  proReflectBtn.style.display = 'none';

  var editDeleteButtons = document.querySelector('.edit-delete-buttons');
  editDeleteButtons.style.display = 'block'; // 수정: flex 대신 block으로 변경

  var currentDate = new Date();
  var publishDate = document.getElementById('publish-date');
  publishDate.textContent = currentDate.toLocaleDateString('ko-KR');
}

function editProReflect() {
 // 수정 기능을 구현하려면 여기에 코드를 추가
}

function deleteProReflect() {
// 삭제 기능을 구현하려면 여기에 코드를 추가
}