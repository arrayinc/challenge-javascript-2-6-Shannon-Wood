// *** YOUR ANSWER BELOW ***


// This program will convert Inches to Feet or yards
// and return an answer in the correct tense.
// ie. foot or feet, yard or yards, inch or inches.

const INCHES_PER_FOOT = 12;
const INCHES_PER_YARD = 36;

function convertInches(inches) {
  if (inches < 36) {
    let feet = Math.floor(inches/INCHES_PER_FOOT);
    let inch = inches % INCHES_PER_FOOT;

      if (feet == 1 && inch == 1 ) {
        return (feet + " foot " + ", " + inch + " inch");
      } // if END
      if (feet !== 1 && inch == 1) {
        return (feet + " feet " + ", " + inch + " inch");
      } // elseif END
      if (feet == 1 && inch !== 1) {
        return (feet + " foot " + ", " + inch + " inches");
      } // if END
      if (feet !== 1 && inch !== 1) {
        return (feet + " feet " + ", " + inch + " inches");
      } // if END
  }  //  if inches < 36 END

  else {
    function convertInches(inches) {
      let yards = Math.floor(inches/INCHES_PER_YARD);
      let yardRemainder = inches%INCHES_PER_YARD;
      let feet = Math.floor(yardRemainder/INCHES_PER_FOOT);
      let inch = yardRemainder % INCHES_PER_FOOT;

      if (yards == 1 && feet == 1 && inch == 1 ) {
        return (yards + " yard " + ", "+ feet + " foot " + ", " + inch + " inch");
      } // if END

      if (yards == 1 && feet == 1 && inch !== 1 ) {
        return (yards + " yard " + ", "+ feet + " foot " + ", " + inch + " inches");
      } // if END

      if (yards == 1 && feet !== 1 && inch == 1 ) {
        return (yards + " yard " + ", "+ feet + " feet " + ", " + inch + " inch");
      } // if END

      if (yards == 1 && feet !== 1 && inch !== 1 ) {
        return (yards + " yard " + ", "+ feet + " feet " + ", " + inch + " inches");
      } // if END

      if (yards !== 1 && feet == 1 && inch == 1 ) {
        return (yards + " yards " + ", "+ feet + " foot " + ", " + inch + " inch");
      } // if END

      if (yards !== 1 && feet == 1 && inch !== 1 ) {
        return (yards + " yards " + ", "+ feet + " foot " + ", " + inch + " inches");
      } // if END

      if (yards !== 1 && feet !== 1 && inch == 1 ) {
        return (yards + " yards " + ", "+ feet + " feet " + ", " + inch + " inch");
      } // if END

      if (yards !== 1 && feet !== 1 && inch !== 1 ) {
        return (yards + " yards " + ", "+ feet + " feet " + ", " + inch + " inches");
      } // if END

    }  // function END
  }  // else END
}  // convertInches Main Function END
