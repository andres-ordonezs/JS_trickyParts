function createAccount(paramPin, paramAmount=0) {
  let pin = paramPin;
  let amount = paramAmount;

  return {
    checkBalance: (pinInput) => {
      if (pinInput === pin) {
        return `$${amount}`;
      } else {
        return "Invalid PIN.";
      }
    },

    deposit: (pinInput, amountInput) => {
      if (pinInput === pin) {
        amount += amountInput;
        return `Succesfully deposited $${amountInput}. Current balance: $${amount}.`;
      } else {
        return "Invalid PIN.";
      }
    },

    withdraw: (pinInput, amountInput) => {
      if (pinInput === pin) {
        if (amount - amountInput < 0) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        } else {
          amount -= amountInput;
          return `Succesfully withdrew $${amountInput}. Current balance: $${amount}.`;
        }
      } else {
        return "Invalid PIN.";
      }
    },

    changePin: (pinInput, newPin) => {
      if (pinInput === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    }
  };

};

module.exports = { createAccount };
