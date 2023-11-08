    //    // ページのDOMツリーを読み込む
    //    $(document).ready(function () {

    //     // タイトル画面のみ表示させるため、要素を非表示にする
    //     $("#content__wrapper,footer").hide();
    //     });
    //     // メインコンテンツを表示させる
    //     $("#content__wrapper,footer").show();

    //     // アプリのスタート画面を非表示にする
    //     $("#app__title__screen").hide();
    //     // stepを非表示にする
    //     $(".step01,.step02,.step03,.step04,.your__solution").hide();
    // 国語非表示
    $("#content__wrapper_step1,footer").hide();
    // 数学非表示
    $("#content__wrapper_step2,footer").hide();
    // 英語非表示
    $("#content__wrapper_step3,footer").hide();
    // 理科非表示
    $("#content__wrapper_step4,footer").hide();
    // 社会非表示
    $("#content__wrapper_step5,footer").hide();
    // 結果非表示
    $("#saiten_box").hide();

    //国語点数定義 
    let jScore = 0;
    // 国語表示
    $('#yourname__registration__button').click(function (e) {
        e.preventDefault(); // フォームのデフォルト動作を無効化
        // .step01を表示させる
        $("#content__wrapper_step1").show();
    });
    // 国語１．採点
    const correctAnswer1 = 'D';
  $('.j_choice1').on('click', function() {{
    this.style.backgroundColor = "#3fb811";
  }
    const userAnswer = $(this).text().charAt(0);
    const resultElement = $('#answer_j1');
    if (userAnswer === correctAnswer1) {
      jScore++;
    }
  });
//   国語２採点
  const correctAnswer2 = 'B';
$('.j_choice2').on('click', function() {{
  this.style.backgroundColor = "#3fb811";
}
  const userAnswer = $(this).text().charAt(0);
  const resultElement = $('#answer_j2');
  if (userAnswer === correctAnswer2) {
    jScore++;
  } 
});
// 国語３採点
const correctAnswer3 = 'C';
$('.j_choice3').on('click', function() {{
  this.style.backgroundColor = "#3fb811";
}
  const userAnswer = $(this).text().charAt(0);
  const resultElement = $('#answer_j3');
  if (userAnswer === correctAnswer3) {
    jScore++;
  }
});
// 国語４採点
const correctAnswer4 = 'A';
$('.j_choice4').on('click', function() {{
  this.style.backgroundColor = "#3fb811";
}
  const userAnswer = $(this).text().charAt(0);
  const resultElement = $('#answer_j4');
  if (userAnswer === correctAnswer4) {
    jScore++;
  }
});
// 国語５採点
const correctAnswer5 = 'B';
$('.j_choice5').on('click', function() {{
  this.style.backgroundColor = "#3fb811";
}
  const userAnswer = $(this).text().charAt(0);
  const resultElement = $('#answer_j5');
  if (userAnswer === correctAnswer5) {
    jScore++;
  }
});



   //数学点数定義 
   let mScore = 0;

    // 数学表示
    $('.btn_m').click(function (e) {
        e.preventDefault(); // フォームのデフォルト動作を無効化
        // .step02を表示させる
        $("#content__wrapper_step2").show();
    });

        // 数学１．採点
        const correctAnswer21 = 'D';
        $('.m_choice1').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_m1');
          if (userAnswer === correctAnswer21) {
            mScore++;
          }
        });
      //   数学２採点
        const correctAnswer22 = 'B';
      $('.m_choice2').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_m2');
        if (userAnswer === correctAnswer22) {
          mScore++;
        } 
      });
      // 数学３採点
      const correctAnswer23 = 'C';
      $('.m_choice3').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_m3');
        if (userAnswer === correctAnswer23) {
          mScore++;
        }
      });
      // 数学４採点
      const correctAnswer24 = 'A';
      $('.m_choice4').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_m4');
        if (userAnswer === correctAnswer24) {
          mScore++;
        }
      });
      // 数学５採点
      const correctAnswer25 = 'B';
      $('.m_choice5').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_m5');
        if (userAnswer === correctAnswer25) {
          mScore++;
        }
      });
    
      

    //英語点数定義 
      let eScore = 0;

    // 英語表示
     $('.btn_e').click(function (e) {
         e.preventDefault(); // フォームのデフォルト動作を無効化
         // .step03を表示させる
         $("#content__wrapper_step3").show();
        });

        // 英語１．採点
        const correctAnswer31 = 'D';
        $('.e_choice1').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_e1');
          if (userAnswer === correctAnswer21) {
            eScore++;
          }
        });
      //   英語２採点
        const correctAnswer32 = 'B';
      $('.e_choice2').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_e2');
        if (userAnswer === correctAnswer22) {
          eScore++;
        } 
      });
      // 英語３採点
      const correctAnswer33 = 'C';
      $('.e_choice3').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_e3');
        if (userAnswer === correctAnswer23) {
          eScore++;
        }
      });
      // 英語４採点
      const correctAnswer34 = 'A';
      $('.e_choice4').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_e4');
        if (userAnswer === correctAnswer24) {
        eScore++;
        }
      });
      // 英語５採点
      const correctAnswer35 = 'B';
      $('.e_choice5').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_e5');
        if (userAnswer === correctAnswer25) {
        eScore++;
        }
      });
    

    //理科点数定義 
      let rScore = 0;

     // 理科表示
     $('.btn_r').click(function (e) {
         e.preventDefault(); // フォームのデフォルト動作を無効化
         // .step04を表示させる
         $("#content__wrapper_step4").show();
        });
        
        // 理科１．採点
          const correctAnswer41 = 'D';
          $('.r_choice1').on('click', function() {{
            this.style.backgroundColor = "#3fb811";
          }
            const userAnswer = $(this).text().charAt(0);
            const resultElement = $('#answer_r1');
            if (userAnswer === correctAnswer21) {
              rScore++;
            }
          });
        //   理科２採点
          const correctAnswer42 = 'B';
        $('.r_choice2').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_r2');
          if (userAnswer === correctAnswer22) {
            rScore++;
          } 
        })
        // 理科３採点
        const correctAnswer43 = 'C';
        $('.r_choice3').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_r3');
          if (userAnswer === correctAnswer23) {
            rScore++;
          }
        });
        // 理科４採点
        const correctAnswer44 = 'A';
        $('.r_choice4').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_r4');
          if (userAnswer === correctAnswer24) {
            rScore++;
          }
        });
        // 理科５採点
        const correctAnswer45 = 'B';
        $('.r_choice5').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_r5');
          if (userAnswer === correctAnswer25) {
            rScore++;
          }
        });


      //社会点数定義 
      let sScore = 0;

     // 社会表示
     $('.btn_s').click(function (e) {
        e.preventDefault(); // フォームのデフォルト動作を無効化
        // .step05を表示させる
        $("#content__wrapper_step5").show();
       });

      // 理科１．採点
      const correctAnswer51 = 'D';
      $('.s_choice1').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_s1');
        if (userAnswer === correctAnswer21) {
          sScore++;
        }
      });
    //   理科２採点
      const correctAnswer52 = 'B';
    $('.s_choice2').on('click', function() {{
      this.style.backgroundColor = "#3fb811";
    }
      const userAnswer = $(this).text().charAt(0);
      const resultElement = $('#answer_s2');
      if (userAnswer === correctAnswer22) {
        sScore++;
      }
    })
    // 理科３採点
    const correctAnswer53 = 'C';
    $('.s_choice3').on('click', function() {{
      this.style.backgroundColor = "#3fb811";
    }
      const userAnswer = $(this).text().charAt(0);
      const resultElement = $('#answer_s3');
      if (userAnswer === correctAnswer23) {
        sScore++;
      }
    });
    // 理科４採点
    const correctAnswer54 = 'A';
    $('.s_choice4').on('click', function() {{
      this.style.backgroundColor = "#3fb811";
    }
      const userAnswer = $(this).text().charAt(0);
      const resultElement = $('#answer_s4');
      if (userAnswer === correctAnswer24) {
        sScore++;
      }
    });
    // 理科５採点
    const correctAnswer55 = 'B';
    $('.s_choice5').on('click', function() {{
      this.style.backgroundColor = "#3fb811";
    }
      const userAnswer = $(this).text().charAt(0);
      const resultElement = $('#answer_s5');
      if (userAnswer === correctAnswer25) {
        sScore++;
      }
    });

    //    結果発表
    $(".btn_result").click(function(e){
        e.preventDefault(); // フォームのデフォルト動作を無効化
        $("#saiten_box").show();

        // 国語点数表示
        if(jScore=== 5) {
            $("#j_result").text(jScore + "点")
          } else if(jScore === 4) {
            $("#j_result").text(jScoreScore + "点")
          } else if(jScore === 3) {
            $("#j_result").text(jScore + "点")
          } else if(jScore ===2){
            $("#j_result").text(jScore + "点")
          } else if(jScore ===1){
            $("#j_result").text(jScore + "点")
          } else if(jScore===0){
            $("#j_result").text(jScore + "点")
          } 
        // 数学点数表示
        if(mScore=== 5) {
            $("#m_result").text(mScore + "点")
          } else if(mScore === 4) {
            $("#m_result").text(mScore + "点")
          } else if(mScore === 3) {
            $("#m_result").text(mScore + "点")
          } else if(mScore ===2){
            $("#m_result").text(mScore + "点")
          } else if(mScore ===1){
            $("#m_result").text(mScore + "点")
          } else if(mScore===0){
            $("#m_result").text(mScore + "点")
          } 
         //英語点数表示 
          if(eScore=== 5) {
            $("#e_result").text(eScore + "点")
          } else if(eScore === 4) {
            $("#e_result").text(eScore + "点")
          } else if(eScore === 3) {
            $("#e_result").text(eScore + "点")
          } else if(eScore ===2){
            $("#e_result").text(eScore + "点")
          } else if(eScore ===1){
            $("#e_result").text(eScore + "点")
          } else if(eScore===0){
            $("#e_result").text(eScore + "点")
          } 
          // 理科点数表示
          if(rScore=== 5) {
            $("#r_result").text(rScore + "点")
          } else if(rScore === 4) {
            $("#r_result").text(rScore + "点")
          } else if(rScore === 3) {
            $("#r_result").text(rScore + "点")
          } else if(rScore ===2){
            $("#r_result").text(rScore + "点")
          } else if(rScore ===1){
            $("#r_result").text(rScore + "点")
          } else if(rScore===0){
            $("#r_result").text(rScore + "点")
          } 
          // 社会点数表示
          if(sScore=== 5) {
            $("#s_result").text(sScore + "点")
          } else if(sScore === 4) {
            $("#s_result").text(sScore + "点")
          } else if(sScore === 3) {
            $("#s_result").text(sScore + "点")
          } else if(sScore ===2){
            $("#s_result").text(sScore + "点")
          } else if(sScore ===1){
            $("#s_result").text(sScore + "点")
          } else if(sScore===0){
            $("#s_result").text(sScore + "点")
          } 

          // 合計点数
        let total = 0;
        let totalScore = jScore + mScore + eScore + rScore + sScore;
       $("#result").text(totalScore + "点")
      });





