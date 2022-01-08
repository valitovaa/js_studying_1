function Lettter(s) {
    let count = " ";
    for (let N = 0; N < s.length; N++) {
        if (s[N] > count) {
            count = s[N];
        }
    }
    console.log(count);
}
Lettter(`Addj`)
Lettter(`jaaaaaaa`)
Lettter(`aaabcdaaa`)
Lettter(`zzzeeeaaa`)