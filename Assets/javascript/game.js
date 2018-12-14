 <script type=" text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">

        let displayNumber, onGoingSUM = 0, wins = 0, loses = 0;

        $(document).ready(function () {
            let displayNumber = Math.floor(Math.random() * 70) + 30;
            $("#number").text(displayNumber);

            for (let i = 0; i < 4; i++) {
                let temp = Math.floor(Math.random() * 25)
                $(".gem").eq(i).attr("data-karats", temp);

            }
            $(".gem").on("click", function () {
                let val = parseInt($(this).attr("data-karats"));
                onGoingSum = onGoingSUM + val;
                $("#onGoingSUM").html("Current Sum: " + onGoingSUM);
                console.log(onGoingSUM);
                console.log($(this).attr("data-value"));

                function score() {
                    if (onGoingSUM === displayNumber) {
                        wins += 1;
                        $("#wins").text("Wins: " + wins);
                        reset();
                        console.log(wins);
                    } else if (onGoingSUM > displayNumber) {
                        losses += 1;
                        $("#losses").text("Losses: " + losses);
                        reset();
                    }
                }
                function reset() {
                    displayNumber = Math.floor(Math.random() * 70) + 30;
                    onGoingSUM = 0;
                    for (let i = 0; i < 4; i++) {
                        let temp = Math.floor(Math.random() * 25);
                        $(".gem")
                            .eq(i)
                            .attr("data-value", temp);
                    }
                    $("#number").text(displayNumber);
                    $("#onGoingSUM").html("Current Sum: " + onGoingSUM);
                }
            });



                
                // console.log($(this).data("karats"));
                // console.log(this);
            // })
            // if onGoingSUM = displayNum    er then win
            // if over then = loses
            // reset after lossA
        });



    </script>