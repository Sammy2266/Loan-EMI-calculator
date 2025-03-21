export function calculateLoanDetails(principal, annualRate, tenureYears) {
    if (principal <= 0 || annualRate < 0 || tenureYears <= 0) {
        return {
            error: "Invalid input values. Please enter positive numbers.",
        };
    }

    const monthlyRate = annualRate / 12 / 100;
    const tenureMonths = tenureYears * 12;

    let emi, totalAmount, totalInterest;

    if (annualRate === 0) {
        // If interest rate is 0%, EMI is just principal divided by tenure
        emi = principal / tenureMonths;
        totalAmount = principal;
        totalInterest = 0;
    } else {
        emi =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
            (Math.pow(1 + monthlyRate, tenureMonths) - 1);
        totalAmount = emi * tenureMonths;
        totalInterest = totalAmount - principal;
    }

    return {
        monthlyEMI: emi.toFixed(2),
        totalPrincipal: principal.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
    };
}
