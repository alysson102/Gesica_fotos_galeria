$(function(){

    //função click menu mobile

    $('.buton-meni2').click(function(){
        $('.meni2').find('ul').slideToggle();
    })

    //função click move scroll

    $('a.quie').click(function(){
        var tay = $(this).attr('href');
        var dust = $(tay).offset().top;

        $('html,body').animate({'scrollTop':dust});

        return false;
    })

    $('a.coras').click(function(){
        var tay = $(this).attr('href');
        var dust = $(tay).offset().top;

        $('html,body').animate({'scrollTop':dust});

        return false;
    })

    //validação de formulario

    $('form.mire').submit(function(){
        var nome = $('input[name=nome]').val();
        var email = $('input[name=email]').val();
        var telefone = $('input[name=telefone]').val();

        if(pret(nome) == false){
            cor($('input[name=nome]'));
            return false;
        }else if(rest(email) == false){
            cor($('input[name=email]'));
            return false;
        }else if(pasow(telefone) == false){
            cor($('input[name=telefone]'));
            return false;
        }
    })

    function pret(nome){
        if(nome == ''){
            return false;
        }

        var key = nome.split(' ').length;
        var hipo = nome.split(' ');
        if(key >= 2){
            for(var i = 0; i < key; i++){
                if(hipo[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    
                }else{
                    return false;
                }
            }
        }else{
            return false;
        }

    }

    function rest(email){
        if(email == ''){
            return false;
        }

        if(email.match(/^([A-Za-z0-9._-]{1})+@+([a-z.]{1,})$/) == null){
            return false;
        }

    }

    function pasow(telefone){
        if(telefone == ''){
            return false;
        }

        if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
            return false;
        }
    }


    function cor(el){
        el.css('border','2px solid red');
        el.css('color','red');
        el.val('Campo Invalido');
    }

    function aoh(el){
        el.css('border','1px solid gray');
        el.css('color','black');
        el.val('');
    }

    $('input[type=text]').focus(function(){
        aoh($(this));
    })



    //função slide de imagem

    var luiz = Math.ceil($('.flumy').length/3) - 1;
    var indi = 0;

    obri();
    function obri(){
        var hern = $('.flumy').length * 33.3;
        var marc = $('.toim');
        var mari = $('.flumy');

        marc.css('width',hern+'%');
        mari.css('width',33.3*(100/hern)+'%');
    }

    eme();
    function eme(){

        $('.magily').click(function(){
            if(indi < luiz)
                indi++;
            var ente = $('.flumy').eq(indi).offset().left - $('.toim').offset().left;
            $('.exclu').animate({'scrollLeft':ente});
        })
        
        $('.magili').click(function(){
            if(indi > 0)
                indi--;
            var ente = $('.flumy').eq(indi).offset().left - $('.toim').offset().left;
            $('.exclu').animate({'scrollLeft':ente});
        })

    }

    cert();
    function cert(){
        $('.flumy').click(function(){
            $('.flumy').css('background-color','');
            $(this).css('background-color','rgba(120, 280, 80, 0.5)');

            var dizer = $(this).children().css('background-image');
            $('.img-hy').css('background-image',dizer);
        })

        $('.flumy').eq(0).click();
    }






    //função slick

    $('.wape').slick({
        centerMode: false,
        slidesToShow: 4,
        arrows: false,
        responsive:[
            {
                breakpoint:800,
                settings:{
                    centerMode: true,
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint:580,
                settings:{
                    centerMode:true,
                    slidesToShow:2,
                    arrows:false,
                }
            },
            {
                breakpoint:380,
                settings:{
                    centerMode:true,
                    slidesToShow:1,
                    arrows:false
                }
            }
        ]
    })

    
    // slick em depoimentos

    $('.rebec').slick({
        centerMode:true,
        slidesToShow:1,
        arrows:false,
        dots:true,
        responsive:[
            {
                breakpoint:800,
                settings:{
                    centerMode:false,
                    slidesToShow:1,
                    arrows:false,
                    dots:true,
                }
            }
        ]
    })


    //slick na segunda pagina "index1"

    $('.novw').slick({
        centerMode: true,
        slidesToShow: 6,
        arrows: false,
        responsive:[
            {
                breakpoint: 800,
                settings:{
                    centerMode:true,
                    slidesToShow:3,
                    arrows:false,
                }
            },
            {
                breakpoint: 580,
                settings:{
                    centerMode:true,
                    slidesToShow:2,
                    arrows:false,
                }
            },
            {
                breakpoint:380,
                settings:{
                    centerMode:true,
                    slidesToShow:1,
                    arrows:false,
                }
            }
        ]
    });
























})



