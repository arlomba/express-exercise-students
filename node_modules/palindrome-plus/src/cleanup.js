module.exports = (st) => {
    st = ('' + st).toUpperCase();
    // Replaces comma, colon, semi-colon, question-mark,exclamation,slashes, paranthesis, square-brackets, space, full-stop, quotation, double-quotation
    st = st.trim().replace(/[,:;?!\/\(\)\[\]\s\.\'\"]/g, '');
    return st;
}