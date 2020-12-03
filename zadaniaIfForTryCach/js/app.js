const zad1 = () => {
  let str = "";

  for (let i = 1; i <= 10; i++) {
    str += `${i}`;
  }

  console.log(str);
};
zad1();

const zad2 = ({ n, txt }) => {
  if (n > 0) {
    let tempTxt = "";
    for (let i = 0; i < n; i++) {
      tempTxt += txt;
    }
    console.log(tempTxt);
    return tempTxt;
  }
};
const zad21 = ({ n, txt }) => {
  if (n > 0) {
    return txt.repeat(n);
  }
};
zad2({ n: 3, txt: "kot" });
zad21({ n: 3, txt: "kot" });

const zad3 = txt => {
  let str1 = "";
  for (let i = 0; i < 3; i++) {
    let n = 0;
    for (let j = 0; j < txt.length + 2; j++) {
      if (i == 0 || i == 2 || j == 0 || j == txt.length + 1) {
        str1 += "*";
      } else {
        console.log(n, txt);
        str1 += txt[n];
        ++n;
      }
    }
    str1 += "\n";
  }

  console.log(str1);
};
zad3("txt");

const zad4 = () => {
  const nr = [];
  for (let i = 0; i < 10; i++) {
    nr.push(Math.round(Math.random() * 10));
  }
  const moreThan5Items = nr.filter(number => number > 5);
  console.log(moreThan5Items);
  if (moreThan5Items.length > 5) {
    console.log("udalo sie");
  } else {
    console.log("nie tym razem");
  }
};
zad4();

const zad5 = nr => {
  let string = "";
  for (let i = 0; i <= nr; i++) {
    string += i;
    for (let j = 1; j <= i; j++) {
      string += "-";
    }
  }
  return string;
};
zad5(7);

// const zad6 = () => {
//   const nr = Number(prompt("podaj liczbe od 1 do 1000"));
//   let randomNr = Math.round(Math.random() * 10);
//   let i = 0;
//   while (nr !== randomNr) {
//     if (randomNr == nr) {
//       console.log(i);
//       break;
//     } else {
//       i++;
//       continue;
//     }
//   }
// };
// zad6();
