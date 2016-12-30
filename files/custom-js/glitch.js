(function() {
  $(".glitch").each(function(i, el) {
    var $tar;
    $tar = $(el);
    return $tar.on("mouseenter", function() {
      var effectWrapper, newSpan, newSpan2, originalHTML, ran, results, tarHeight;
      if (!$tar.is(".glitch-initiated")) {
        $tar.addClass("glitch-initiated");
        tarHeight = $tar.height();
        originalHTML = $tar.html();
        $tar.html("<span class='glitch-original'>" + originalHTML + "</span>");
        effectWrapper = $("<span>").addClass("glitch-effect");
        $tar.prepend(effectWrapper);
        i = tarHeight / 2;
        results = [];
        while (i > 0) {
          i--;
          ran = 3 - Math.random() * 6;
          newSpan = $("<span>").html(originalHTML).css({
            transform: "translate(" + ran + "px, -" + (i * 2) + "px)"
          });
          newSpan2 = $("<span>").append(newSpan).css({
            transform: "translate(0, " + (i * 2) + "px)"
          });
          results.push(effectWrapper.append(newSpan2));
        }
        return results;
      }
    });
  });

}).call(this);