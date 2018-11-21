/**
         * first repeating number
         */
        var arr=[10, 5, 3, 4, 3, 5, 6 ,3,10]
        var len = arr.length;

		for (var i = 0; i < len - 1; i++) {
            for (var j = i + 1; j < len; j++) 
            {
                if (arr[i] == arr[j]) 
                {
                    console.log("first repeating "+arr[i])
                    return
				}
			}
		}