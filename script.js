function calc() {
  var m1, m2, m3, m4, m5, avg = 0, total = 0, result = "", grade = "";
  m1 = parseInt(document.form.s1.value);
  m2 = parseInt(document.form.s2.value);
  m3 = parseInt(document.form.s3.value);
  m4 = parseInt(document.form.s4.value);
  m5 = parseInt(document.form.s5.value);
  total = m1 + m2 + m3 + m4 + m5;
  avg = total / 5;
  if (m1 < 35 || m2 < 35 || m3 < 35 || m4 < 35 || m5 < 35) {
      result = "fail";
      grade = "D";
  } else if (avg >= 75) {
      result = "distinction";
      grade = "A+";
  } else if (avg >= 60 && avg < 75) {
      result = "first class";
      grade = "A";
  } else if (avg >= 50 && avg < 60) {
      result = "second class";
      grade = "B";
  } else if (avg >= 35 && avg < 50) {
      result = "pass class";
      grade = "C";
  } else if (avg < 35) {
      result = "fail";
      grade = "D";
  }
  document.form.result.value = result;
  document.form.grade.value = grade;
  document.form.total.value = total;
  document.form.average.value = avg;
}
