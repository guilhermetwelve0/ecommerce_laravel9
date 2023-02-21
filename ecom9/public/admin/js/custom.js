$(document).ready(function () {
    // Adicionar delay de 500ms com debounce
    $("#current_password").keyup(function () {
        var current_password = $("#current_password").val();
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                type: "post",
                url: "/admin/check-admin-password",
                data: { current_password: current_password },
                success: function (resp) {
                    if (resp == "false") {
                        $("#check_password").html(
                            "<font color='red'>Current Password is Incorret!</font>"
                        );
                    } else if (resp == "true") {
                        $("#check_password").html(
                            "<font color='green'>Current Password is Correct!</font>"
                        );
                    }
                },
                error: function () {
                    alert("Erro");
                }
            });

    });
});
