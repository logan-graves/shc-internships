
function checkOrUncheck(id) {
  var box = document.getElementById(id);
  console.log("Checkbox clicked: " + id)
  if (box.style.color === "transparent") {
    box.style.color = "black"
    console.log("Color of " + id + " changed to black.")
  } else {
    box.style.color = "transparent"
    console.log("Color of " + id + " changed to transparent.")
  }
  /** Remove Console.log function before deployment */
}

function chkFilterGrade() {
  var filter9thgrade = document.getElementById("grade-9");
  var filter10thgrade = document.getElementById("grade-10");
  var filter11thgrade = document.getElementById("grade-11");
  var filter12thgrade = document.getElementById("grade-12");
  if (filter9thgrade.style.color === "transparent" && filter10thgrade.style.color === "transparent" &&filter11thgrade.style.color === "transparent" && filter12thgrade.style.color === "transparent") {
    var v = false
  } else {
    var v = true
  }
  console.log("filteringbygrade" + v);
  return v;
}

function chkFilterSubject() {
  var filter_m_s_e = document.getElementById("math-science-engineering");
  var filter_a_l = document.getElementById("arts-language");
  var filter_service = document.getElementById("service");
  var filter_government = document.getElementById("government");
  if (filter_m_s_e.style.color === "transparent" && filter_a_l.style.color === "transparent" &&filter_service.style.color === "transparent" && filter_government.style.color === "transparent") {
    var v = false
  } else {
    var v = true
  }
  console.log("filteringbysubject" + v);
  return v;
}

function uncheckall() {
  var all_boxes = document.getElementsByClassName("box")
  console.log(all_boxes)
  for (var i = 0, max = all_boxes.length; i < max; i++) {
    all_boxes[i].style.color = "transparent";
    console.log("style changed for " + all_boxes[i]);
  }
}

function displayContent() {
  var filterGrade = chkFilterGrade();
  var filterSubject = chkFilterSubject();
  /** If no boxes are checked, displays all content */
  if (filterGrade === false && filterSubject === false) {
    console.log("Not Filtering.");
    var c = document.querySelectorAll('.m_s_e,.art,.srv,.govt');
    for (var i = 0, max = c.length; i < max; i++) {
    c[i].style.display = "inline-block";
    console.log("style changed for " + c[i]);
    }
  } else if (filterGrade === false) {
    console.log("Filtering by subject.")
    var m_s_eContent = document.getElementsByClassName("m_s_e");
    var srvContent = document.getElementsByClassName("srv");
    var a_lContent = document.getElementsByClassName("art");
    var govtContent = document.getElementsByClassName("govt");
    var filter_m_s_e = document.getElementById("math-science-engineering");
    var filter_a_l = document.getElementById("arts-language");
    var filter_service = document.getElementById("service");
    var filter_government = document.getElementById("government");
    /** Checks if math, science, enginerring box is checked; if yes, shows all mse content, if no it hides it */
    if (filter_m_s_e.style.color !== "transparent") {
      for (var i = 0, max = m_s_eContent.length; i < max; i++) {
        m_s_eContent[i].style.display = "inline-block"
        console.log("mse content shown")
      }
    } else {
      for (var i = 0, max = m_s_eContent.length; i < max; i++) {
        m_s_eContent[i].style.display = "none"
        console.log("mse content hidden")
      }
    }
    /** Repeats this process for each one - starting with service, then art, then government. */
    if (filter_a_l.style.color !== "transparent") {
      for (var i = 0, max = a_lContent.length; i < max; i++) {
        a_lContent[i].style.display = "inline-block"
        console.log("a_l content shown")
      }
    } else {
      for (var i = 0, max = a_lContent.length; i < max; i++) {
        a_lContent[i].style.display = "none"
        console.log("a_l content hidden")
      }
    }
    /** service */
    if (filter_service.style.color !== "transparent") {
      for (var i = 0, max = srvContent.length; i < max; i++) {
        srvContent[i].style.display = "inline-block"
        console.log("srv content shown")
      }
    } else {
      for (var i = 0, max = srvContent.length; i < max; i++) {
        srvContent[i].style.display = "none"
        console.log("srv content hidden")
      }
    }

    /** govt */
    if (filter_government.style.color !== "transparent") {
      for (var i = 0, max = a_lContent.length; i < max; i++) {
        govtContent[i].style.display = "inline-block"
        console.log("govt content shown")
      }
    } else {
      for (var i = 0, max = govtContent.length; i < max; i++) {
        govtContent[i].style.display = "none"
        console.log("govt content hidden")
      }
    }
  } else if (filterSubject === false) {
    console.log("Filtering by Grade.")
    
    var allgradeContent = document.getElementsByClassName("allgrades");
    var srvContent = document.getElementsByClassName("srv");
    var a_lContent = document.getElementsByClassName("art");
    var govtContent = document.getElementsByClassName("govt");
    var filter_m_s_e = document.getElementById("math-science-engineering");
    var filter_a_l = document.getElementById("arts-language");
    var filter_service = document.getElementById("service");
    var filter_government = document.getElementById("government");
    /** Checks if math, science, enginerring box is checked; if yes, shows all mse content, if no it hides it */
    if (filter_m_s_e.style.color !== "transparent") {
      for (var i = 0, max = m_s_eContent.length; i < max; i++) {
        m_s_eContent[i].style.display = "inline-block"
        console.log("mse content shown")
      }
    } else {
      for (var i = 0, max = m_s_eContent.length; i < max; i++) {
        m_s_eContent[i].style.display = "none"
        console.log("mse content hidden")
      }
    }
    /** Repeats this process for each one - starting with service, then art, then government. */
    if (filter_a_l.style.color !== "transparent") {
      for (var i = 0, max = a_lContent.length; i < max; i++) {
        a_lContent[i].style.display = "inline-block"
        console.log("a_l content shown")
      }
    } else {
      for (var i = 0, max = a_lContent.length; i < max; i++) {
        a_lContent[i].style.display = "none"
        console.log("a_l content hidden")
      }
    }
    /** service */
    if (filter_service.style.color !== "transparent") {
      for (var i = 0, max = srvContent.length; i < max; i++) {
        srvContent[i].style.display = "inline-block"
        console.log("srv content shown")
      }
    } else {
      for (var i = 0, max = srvContent.length; i < max; i++) {
        srvContent[i].style.display = "none"
        console.log("srv content hidden")
      }
    }

    /** govt */
    if (filter_government.style.color !== "transparent") {
      for (var i = 0, max = a_lContent.length; i < max; i++) {
        govtContent[i].style.display = "inline-block"
        console.log("govt content shown")
      }
    } else {
      for (var i = 0, max = govtContent.length; i < max; i++) {
        govtContent[i].style.display = "none"
        console.log("govt content hidden")
      }
    }

    
  } else /**they're both true*/ {
    console.log("Filtering by both Subject and Grade")
  }
}
