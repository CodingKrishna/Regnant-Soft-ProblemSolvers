/**
 * sort the alphabetical order
 */
var names=["mnb","bababa","ccada","al"];
var n=names.length;
for (var i = 0; i < n; i++)  {
            for (var j = i + 1; j < n; j++) {
                
                if (names[i]>names[j]) {
                    temp = names[i];
                    names[i] = names[j];
                    names[j] = temp;
                }
            }
        }
        console.log("Names in Sorted Order:");
        for (var i = 0; i < n ; i++) {
            console.log(names[i] );
        }