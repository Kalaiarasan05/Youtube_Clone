document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('video.html')) {
        var commentInput = document.querySelector('.commentContainer .writeCommentContainer input');
        var commentsBox = document.querySelector('.previousCommentsContainer');
        var userImage = 'images/myImg.jpeg';
        var userName = '@letsupgrade';
        var commentCountElem = document.querySelector('.commentContainer h1');

        // Function to update the comment count
        function updateCommentCount() {
            var count = commentsBox.querySelectorAll('.previousComments').length;
            commentCountElem.textContent = count + (count === 1 ? ' comment' : ' comments');
        }

        // Initial update
        updateCommentCount();

        commentInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                var newComment = commentInput.value.trim();
                if (newComment !== '') {
                    var commentDiv = document.createElement('div');
                    commentDiv.className = 'previousComments d-flex';
                    commentDiv.innerHTML =
                        '<img class="channelImg" src="' + userImage + '" alt="">' +
                        '<div class="nameAndComment">' +
                        '<p>' + userName + '</p>' +
                        '<p class="comment">' + newComment + '</p>' +
                        '</div>';
                    commentsBox.prepend(commentDiv);
                    commentInput.value = '';
                    updateCommentCount();
                }
            }
        });
    }
});
var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var mainContainer = document.querySelector(".mainContainer")
// var card = document.getElementById("card")

menuIcon.onclick = function()
{
    sidebar.classList.toggle("smaller-sidebar")
    mainContainer.classList.toggle("larger-mainContainer")
    // card.classList.toggle("larger-card")
    console.log("Menu Icon Clicked");
}