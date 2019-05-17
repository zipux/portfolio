function toggle_dp() {
    dp = $("#datepicker");
    if (dp.attr('datepicker')) {
      dp.datepicker('destroy');
      dp.removeAttr('datepicker');
    } else {
      dp.datepicker();
      dp.attr('datepicker', 1);
    }
  }