    $(".timeline-fashion-bg").hover(
      // hover in
      function(){
          var container = $(this),
            defaultState = container.find('.default-state'), // find default-state
            rollover = container.find('.rollover-state'), // find rollover-state
            active = rollover.find('.active');  // find active state
           
          //show active item
          active.fadeIn();
          //hide default-state
          defaultState.hide();
      },
      // hover out
      function(){
          var container = $(this),
            defaultState = container.find('.default-state'),
            rollover = $(this).find('.rollover-state'),
            items = rollover.find('.item'),
            active = rollover.find('.active');
            
          // hide the active item
          active.hide();
          
          // remove the current active class from item
          items.removeClass('active');
          
          // condition to determine if we are on last item
          if(active.index() != items.last().index()) {
          
            //if not on last item, add active class to the next item
            active.next().addClass('active');
            
          }else{
          
            //if on last item, add active calss to the first item
            items.first().addClass('active');
            
          }
          
          //show default-state
          defaultState.fadeIn();  
    });