
/**
 * Ajouter les options si on clique sur les select et n'ont pas encore des valeurs
 */

    $('#selectMonth').click(function(){
        
        /**
         * Empeche l'ajout des options à chaque click
         */
        if( $('#selectMonth option').length == 1 )
        {
            
            var listMonth = ['Janvier' , 'Février' , 'Mars' , 'Avril' , 'Mai' , 'Juin' , 'Juillet' , 'Aout' , 'Septembre' , 'Octobre' , 'Novembre' , 'Décembre'];
            
            jQuery.each(listMonth, function(indexMonth, month) {
                    
                $('#selectMonth').append('<option value='+(indexMonth+1)+'>'+month+'</option>');

            });
        }
    });



    $('#selectDay').click(function(){
        
        if( $('#selectDay option').length == 1 )
        {
            for (var i=1; i<=31; i++)
            {
                $('#selectDay').append('<option value='+i+'>'+i+'</option>');
            }
        }
    });



    $('#selectYear').click(function(){
        
        if( $('#selectYear option').length == 1 )
        {
            var currentYear = new Date(); 
            for (var i=currentYear.getFullYear(); i>=1915; i-- )
            {
                $('#selectYear').append('<option value='+i+'>'+i+'</option>');
            }
        }
    });



/*
    * Logique date , si on change la valeur du mois
    */
   $('#selectMonth').change(function () {
        
    var selectMonthIndex = $('#selectMonth option:selected').attr("value");
    
    var selectYearIndex = $('#selectYear option:selected').attr("value");
    
    if (selectMonthIndex == 2)
        {
            if((selectYearIndex%4==0) && ((selectYearIndex%100!=0) || (selectYearIndex%400==0))) 
            {
                //29 jours
                $('#selectDay').children('option:not(:first)').remove();
                for(var i=1; i<=29; i++)
                {
                    $('#selectDay').append('<option value='+i+'>'+i+'</option>');
                }
            } else {
                //28 jours
                $('#selectDay').children('option:not(:first)').remove();
                for(var i=1; i<=28; i++)
                {
                    $('#selectDay').append('<option value='+i+'>'+i+'</option>');
                }
            }
        } else if (selectMonthIndex == 1 || selectMonthIndex == 3 || selectMonthIndex == 5 || selectMonthIndex == 7 || selectMonthIndex == 8 || selectMonthIndex == 10 || selectMonthIndex == 12) {
                //31 jours
                $('#selectDay').children('option:not(:first)').remove();
                for(var i=1; i<=31; i++)
                {
                    $('#selectDay').append('<option value='+i+'>'+i+'</option>');
                }
        } else if (selectMonthIndex == 4 || selectMonthIndex == 6 || selectMonthIndex == 9 || selectMonthIndex == 11) {
                //30 jours
                $('#selectDay').children('option:not(:first)').remove();
                for(var i=1; i<=30; i++)
                {
                    $('#selectDay').append('<option value='+i+'>'+i+'</option>');
                }
        }
});
/*
* Logique date si on change la valeur du l'année
*/
$('#selectYear').change(function () {
    
    var selectMonthIndex = $('#selectMonth option:selected').attr("value");
    
    var selectYearIndex = $('#selectYear option:selected').attr("value");
    
    if (selectMonthIndex == 2)
        {
            if((selectYearIndex%4==0) && ((selectYearIndex%100!=0) || (selectYearIndex%400==0))) 
            {
                //29 jours fevrier
                $('#selectDay').children('option:not(:first)').remove();
                for(var i=1; i<=29; i++)
                {
                    $('#selectDay').append('<option value='+i+'>'+i+'</option>');
                }
            } else {
                //28 jours fevrier
                $('#selectDay').children('option:not(:first)').remove();
                for(var i=1; i<=28; i++)
                {
                    $('#selectDay').append('<option value='+i+'>'+i+'</option>');
                }
            }
        } else if (selectMonthIndex == 1 || selectMonthIndex == 3 || selectMonthIndex == 5 || selectMonthIndex == 7 || selectMonthIndex == 8 || selectMonthIndex == 10 || selectMonthIndex == 12) {
                //31 jours pour janvier mars mai, etc
                $('#selectDay').children('option:not(:first)').remove();
                for(var i=1; i<=31; i++)
                {
                    $('#selectDay').append('<option value='+i+'>'+i+'</option>');
                }
        } else if (selectMonthIndex == 4 || selectMonthIndex == 6 || selectMonthIndex == 9 || selectMonthIndex == 11) {
                //30 jours pour avril juin septembre
                $('#selectDay').children('option:not(:first)').remove();
                for(var i=1; i<=30; i++)
                {
                    $('#selectDay').append('<option value='+i+'>'+i+'</option>');
                }
        }
});