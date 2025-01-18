/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.azur = {
    attach: function (context, settings) {

    }
  };

  function init() {
        var vidDefer = document.getElementsByTagName('iframe');
        var $yid;
        for (var i=0; i<vidDefer.length; i++) {
          if(vidDefer[i].getAttribute('data-src')) {
            $yid = vidDefer[i].getAttribute('data-src').split('=')[1].split('&')[0];
            vidDefer[i].setAttribute('src','https://www.youtube.com/embed/'+$yid+'?wmode=opaque');
          } 
        } 
      }
  $(document).ready(function(){
    //console.log("On career Page");
        $("#myModal").modal('show');
        window.onload = init;
  });

  function leftWidthValueForContactInfo() {
    var screenWidth = $(window).width();
    var containerWidth = $('.container').width();
    var leftWidthOfConactInfo = (screenWidth - containerWidth) / 2;
    $('.left-width').css({
      'left': -leftWidthOfConactInfo,
      'width': leftWidthOfConactInfo
    });
  }

  leftWidthValueForContactInfo();

  $(window).resize(function () {
    leftWidthValueForContactInfo();
  });

  // Convert ul li into select
  function convertUltoSelect() {
    if ($(window).width() < 768) {
      jQuery('.search-results__filter-navbar .nav').each(function() {
        var $select = $('<select />');

        jQuery(this).find('a').each(function() {
          var $option = $('<option />');
          $option.attr('value', $(this).attr('href')).html($(this).html());
          $select.append($option);
        });

        jQuery(this).replaceWith($select);
        $select.addClass('form-control');
      });
    }
  }
  convertUltoSelect();
  jQuery('.tabs-to-select-mobile').on('change', function (e) {
    jQuery('.navtabs-style-1 .nav-tabs li a').eq($(this).val()).tab('show');
    jQuery('.nav-tabs.life-custom li a').eq($(this).val()).tab('show');
    jQuery('.quicktabs-tabs li').eq($(this).val()).tab('show');
  });
 
  jQuery('.counter').each(function () {
    jQuery(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          jQuery(this).text(Math.ceil(now).toLocaleString('en'));
        }
    });
});
  jQuery(function () {
    jQuery(".item-wrapper-azure:not(:first-child)").children('h3').on('click', function () {
      jQuery(this).next('.item-list-azure').toggle();
      // jQuery('h3').addClass('add');
      if(jQuery(this).hasClass('add')) {
        jQuery(this).removeClass('add');
    } else {
      jQuery(this).addClass('add');
    }
      // jQuery(".add").toggle();
      // jQuery(".add:after").toggleClass("rotate");
    });
  })
  jQuery(function () {
    jQuery(".item-wrapper-azure:first-child").children('h3').on('click', function () {
      jQuery(this).next('.item-list-azure').toggle();
      if(jQuery(this).hasClass('rotate')) {
        jQuery(this).removeClass('rotate');
    } else {
      jQuery(this).addClass('rotate');
    }
    });
  })
  jQuery('.all-project').click(function() {
    jQuery('.views-exposed-form .form-row').toggle();
 });

  // Video Carousel Load on Click
  var $videoSrc;
  $('.video-card-full-click, .video-card-caption-click .video-card__caption').click(function () {
    $videoSrc = $(this).data("src");
  });
  //console.log($videoSrc);
  // when the modal is opened autoplay it
  $('#video-modal').on('shown.bs.modal', function (e) {
    // set the video src to autoplay and not to show related video.
    $("#video-carousel-id").attr('src', $videoSrc + "?rel=0&amp;autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  });
  // stop playing the youtube video when I close the modal
  $('#video-modal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video-id").attr('src', $videoSrc);
  });

  jQuery(function () {
    // Hide the apply button.  Hold the jQuery object for use later 
   // alert('st');
    var apply = $('#edit-submit-all-projects');
    apply.hide();
    
    jQuery('.views-exposed-form input').change(function() {
      jQuery(this).parents('form').submit();
    });
  })

  jQuery(document).ready(function($){

    //add view all in project filter
    var $checkbox_html  = '<div class="js-form-item js-form-type-checkbox checkbox form-check"><input data-drupal-selector="view-all" type="checkbox" id="view-all" name="view_all" class="form-checkbox form-check-input"><label class="form-check-label" for="view-all">View All</label></div>';
    jQuery('.view-id-all_projects_page #edit-field-project-category-target-id .form-checkboxes').prepend($checkbox_html);


    $('.view-id-all_projects_page .bef-toggle').hide();
    $('#view-all').click(function(){
      $('.view-id-all_projects_page .bef-toggle').click();
    });

    if (window.location.href.indexOf('?view_all=') > 0) {
       jQuery('.view-id-all_projects_page .form-checkboxes').find('input#view-all').prop('checked', true);
    }
   

    // Hide the apply button.  Hold the jQuery object for use later 
    setTimeout(function () {
      // alert($('#twitter-widget-0').contents().find('.timeline-Tweet-media').length);
      jQuery('#twitter-widget-0').contents().find('.timeline-Tweet-media').hide();
      jQuery('#twitter-widget-0').contents().find('.timeline-Tweet-actions').hide();
      jQuery('#twitter-widget-0').contents().find('.dt-updated').hide();
      jQuery('#twitter-widget-0').contents().find('.timeline-Tweet-text').css({"color": "#fff"});
      jQuery('#twitter-widget-0').contents().find('.timeline-Tweet-text a').css({"color": "#F39314"});
      jQuery('#twitter-widget-0').contents().find('.TweetAuthor a').css({"color": "#F39314"});
      jQuery('#twitter-widget-0').contents().find('.timeline-Tweet-timestamp').css({"color": "#fff"});
      jQuery('#twitter-widget-0').contents().find('.timeline-Tweet').hover(function() {
        jQuery('#twitter-widget-0').contents().find('.timeline-Tweet').css({"background-color": "transparent"});
        jQuery('#twitter-widget-0').contents().find('.timeline-Tweet').css({"font-family": "Open Sans, sans-serif"});

      });
   /*   jQuery('#twitter-widget-0').contents().find('.timeline-Tweet').mouseleave(function(){
        jQuery('#twitter-widget-0').contents().find('.timeline-Tweet').css({"background": "transparent"});
        });*/
    }, 3500);

    jQuery.fn.selectText = function(){
      this.find('input').each(function() {
          if($(this).prev().length == 0 || !$(this).prev().hasClass('p_copy')) { 
              $('<p class="p_copy" style="position: absolute; z-index: -1;"></p>').insertBefore($(this));
          }
          $(this).prev().html($(this).val());
      });
      var doc = document;
      var element = this[0];
     // console.log(this, element);
      if (doc.body.createTextRange) {
          var range = document.body.createTextRange();
          range.moveToElementText(element);
          range.select();
      } else if (window.getSelection) {
          var selection = window.getSelection();        
          var range = document.createRange();
          range.selectNodeContents(element);
          selection.removeAllRanges();
          selection.addRange(range);
      }
    };

    jQuery('.copy_dircontent').on("click", function(e) {
      
      var selector = jQuery(this).data('selector');
      jQuery(selector).selectText();
      document.execCommand("copy");
      jQuery(this).addClass("icon-active");
      if (jQuery('.link_profile').hasClass("icon-active")) {
        jQuery('.link_profile').removeClass("icon-active");
      }
      e.stopPropagation();
      
    });

    jQuery(document).on("click", function (e) {
      if (jQuery(e.target).is(".copy_dircontent") === false) {
        if (jQuery('.copy_dircontent').hasClass("icon-active")) {
          jQuery('.copy_dircontent').removeClass("icon-active");
        }
      }
      if (jQuery(e.target).is(".link_profile") === false) {
        if (jQuery('.link_profile').hasClass("icon-active")) {
          jQuery('.link_profile').removeClass("icon-active");
        }
      }
    });

    jQuery('.link_profile').on("click", function(e) {
      
      var selector = jQuery(this).data('selector');
      window.location.hash = selector.split(" ").join("");;
      jQuery(this).addClass("icon-active");
      if (jQuery('.copy_dircontent').hasClass("icon-active")) {
        jQuery('.copy_dircontent').removeClass("icon-active");
      }
      e.stopPropagation();
      
    });

    jQuery(".link_profile").each(function(){

      // Test if the div element is empty
      var selector = '#'+jQuery(this).data('selector');
      if(selector.split(" ").join("") == decodeURI(window.location.hash)){
        var modal_id = jQuery(this).attr('id').split('-').pop();
        jQuery('#modal-'+modal_id).modal('show')
      }

    });

    jQuery(".custom_social_sharelink").hover(function(){
      jQuery('.custom_social_shareicons').show();
    },function(){
      jQuery('.custom_social_shareicons').hide();
    });

    jQuery(".custom_social_shareicons").hover(function(){
      jQuery('.custom_social_shareicons').show();
    },function(){
      jQuery('.custom_social_shareicons').hide();
    });

    var location_arr = window.location.href.split('/');
    if(location_arr[3] == 'life-at-azure'){
      if(decodeURI(window.location.hash)){
        var active_href = jQuery('.life-custom li .active').attr('href');
        jQuery('a[href="'+active_href+'"]').removeClass('active');
        jQuery(active_href).removeClass('active');
        jQuery('a[href="'+decodeURI(window.location.hash)+'"]').addClass('active');
        jQuery(decodeURI(window.location.hash)).addClass('active');
        jQuery('html, body').animate({
          scrollTop: jQuery(".life-custom").offset().top
        }, 2000);
      }
    }

    jQuery( "<div class='selectpicker-design-box selectpicker-design-box--white d-md-none'><select class='form-control tabs-to-select-mobile'><option value='0'>Press Release</option><option value='1'>News</option><option value='2'>Media Coverage</option><option value='3'>Media Kit</option> </select></div>" ).insertBefore( "#quicktabs-newsroom" );
    

  });


})(jQuery, Drupal);
;
