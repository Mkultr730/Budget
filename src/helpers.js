export const checkBudget = (budget, remain) => {
    let className;

    if ( (budget/4) > remain ) {
        className = 'alert alert-danger';
    } else if( (budget/2) > remain ) {
        className = 'alert alert-warning';
    } else {
        className = 'alert alert-success';
    }

    return className;
}