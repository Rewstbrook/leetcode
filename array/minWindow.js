/**
 * 最小覆盖子串
 */
function minWindow(s, t) {
    if (t.length > s.length) {
        return "";
    }
    let left = 0;
    let right = t.length - 1;
    
}