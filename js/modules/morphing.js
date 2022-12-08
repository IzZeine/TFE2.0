console.log('le module : morphing');

let target = document.querySelector('.requin-morphing');
let step1Path = 'M18.7399 92.26C18.7399 92.26 22.1399 88 33.2099 79.49C49.7199 106.38 107.93 132.6 110.66 70.98C111.51 37.96 98.0599 28.43 73.5499 29.96L72.5299 25.5301C72.5299 25.5301 43.9299 48.34 37.9799 50.21C49.0399 51.74 63.1699 34.89 71.6799 35.4C105.21 32 116.28 90.72 84.2799 95.14C69.4799 93.99 55.1699 65.86 55.1699 65.86L69.1299 47.48C69.1299 47.48 74.4099 44.08 47.8499 41.18C41.0399 21.44 28.2799 -8.86 7.50992 2.54C-13.2601 13.94 15.8499 58.37 15.8499 58.37C15.8499 58.37 12.7899 94.28 18.7399 92.24V92.26Z';
let step2Path = 'M49.5999 1.91C49.5999 1.91 51.6 6.98002 53.48 20.81C21.94 21.76 -29.76 59.22 22.34 92.23C50.56 109.39 65.52 102.47 76.38 80.44L80.7299 81.76C80.7299 81.76 75.17 45.61 76.5 39.51C69.67 48.35 77.26 68.98 72.58 76.11C58.85 106.89 2.40995 87.28 14.48 57.32C22.84 45.05 54.36 46.63 54.36 46.63L63.37 67.88C63.37 67.88 63.7 74.15 79.42 52.55C99.94 56.46 132.57 60.46 133 36.77C133.43 13.08 80.42 16.24 80.42 16.24C80.42 16.24 50.7899 -4.27995 49.5999 1.90005V1.91Z';
let step3Path = 'M92.7801 1.74999C92.7801 1.74999 94.5501 6.90999 95.8001 20.81C64.2501 20.32 47.66 29.28 43.32 45.88C38.98 62.48 -5.23996 81.2 6.61004 59.69L10.8901 61.2C10.8901 61.2 6.97002 24.83 8.59002 18.8C1.36002 27.32 8.01006 48.28 3.01006 55.19C-12.0999 85.32 43.58 80.21 55.19 55.52C66.8 30.82 95.5101 46.65 95.5101 46.65L103.54 68.29C103.54 68.29 103.58 74.57 120.27 53.71C140.59 58.55 173.01 64.03 174.52 40.38C176.03 16.73 122.93 17.48 122.93 17.48C122.93 17.48 94.2601 -4.37 92.7901 1.76L92.7801 1.74999Z';
let step4Path = 'M914.151 72.4751C911.63 70.7987 908.877 69.3999 905.846 68.7726C895.033 66.5523 884.27 64.0267 873.707 60.8849C866.025 58.5979 858.231 57.7542 850.377 57.2046C843.205 56.6995 835.989 56.8882 828.812 56.5108C824.232 56.2721 819.68 55.556 815.118 55.0565C809.544 54.4514 803.983 53.5022 798.398 53.3357C790.294 53.0914 782.195 52.4809 774.108 52.3143C762.484 52.0756 750.922 50.699 739.282 50.9599C734.408 51.0709 729.534 50.971 724.633 50.588C712.832 49.6777 701.053 51.0543 689.274 51.6982C680.742 52.1645 672.244 53.2857 663.712 53.7076C656.996 54.0406 650.307 54.6124 643.685 55.6171C633.31 57.1935 622.952 57.9818 612.439 57.8208C605.739 57.7153 599.722 56.0445 593.91 53.0803C579.755 45.8476 566.6 37.2104 554.81 26.4195C545.928 18.2986 535.781 11.8541 524.868 6.6973C519.423 4.19941 513.85 2.02902 508.021 0.608001C504.186 -0.324544 500.317 -0.174671 496.537 0.99101C492.784 2.14559 490.836 4.99874 491.047 8.9343C491.208 11.9151 491.896 14.7905 493.234 17.4604C500.356 31.6762 506.5 46.2861 510.986 61.5621C510.658 61.8174 510.53 62.1671 510.719 62.5279C512.09 65.1646 511.757 67.8512 511.063 70.5878C508.854 79.2915 504.619 87.035 499.773 94.4843C498.64 96.2272 497.025 97.2153 494.882 97.7704C488.116 99.5355 481.388 101.462 474.722 103.571C454.955 109.821 435.666 117.481 415.777 123.421C396.477 129.183 377.426 135.761 357.365 138.647C351.637 139.468 346.508 139.208 341.573 135.855C335.645 131.819 329.328 128.406 322.828 125.358C318.648 122.699 313.924 121.251 309.178 120.479C299.997 118.986 296.905 121.695 296.228 131.064C295.601 139.746 292.875 147.423 286.403 153.551C283.389 156.404 280.885 159.712 278.571 163.16C274.796 163.876 271.233 165.413 267.386 165.913C265.659 166.135 263.694 165.852 262.24 167.267C261.702 167.212 261.147 166.99 260.653 167.412C260.286 167.478 259.92 167.55 259.553 167.617C255.79 168.055 252.054 168.605 248.391 169.626C248.202 169.732 248.013 169.837 247.824 169.943C247.175 170.004 246.526 170.065 245.876 170.126C245.121 170.165 244.311 170.259 243.889 170.914C242.795 172.607 241.358 172.346 239.781 171.869C222.324 166.551 204.85 161.322 188.391 153.235C181.275 149.732 174.065 146.407 166.837 143.149C154.403 137.537 141.875 132.13 129.474 126.441C125.167 124.464 120.815 122.588 116.835 119.818C113.327 117.376 109.069 116.033 105.228 114.046C94.3597 108.411 83.6687 102.461 73.6272 95.4168C73.2942 95.106 72.9889 94.7451 72.617 94.4843C61.432 86.6076 50.5967 78.2702 39.9501 69.683C33.7664 64.6983 27.3385 60.0078 20.6442 55.7337C15.2599 52.2977 9.33707 50.8544 2.91472 51.9591C1.43264 52.2144 0.150391 52.6751 0.0893318 54.4237C-0.088296 59.3917 -0.310334 64.1821 2.7704 68.7726C8.48224 77.2766 13.2948 86.3633 19.0455 94.8673C22.9034 100.579 25.2958 106.89 26.7557 113.685C27.8215 118.647 31.6349 120.34 36.5585 118.914C37.8796 118.531 39.1841 118.02 40.4219 117.42C42.5313 116.399 44.7627 115.894 47.0386 115.483C48.5984 115.206 49.4698 115.311 49.6863 117.382C50.2303 122.583 52.5339 127.079 56.0754 130.931C58.3901 133.446 60.6826 135.983 63.0362 138.464C87.9707 164.758 115.203 188.433 144.445 209.815C150.346 214.128 155.675 219.101 160.77 224.363C164.517 228.232 164.856 232.507 164.029 237.402C162.197 248.238 158.461 258.418 154.098 268.437C151.961 273.344 150.274 278.418 150.851 283.985C151.406 289.325 153.493 291.074 158.716 289.875C167.77 287.788 175.824 283.475 183.273 278.085C192.899 271.118 200.814 262.237 209.34 254.049C211.328 252.14 213.426 250.308 214.936 247.955C215.652 246.239 217.733 245.523 218.116 243.569C220.548 242.071 221.913 239.606 223.589 237.447C230.406 228.671 237.861 220.478 246.02 212.945C248.74 210.436 251.799 208.704 255.912 208.81C262.828 208.982 269.811 209.032 276.667 208.244C286.603 207.1 295.323 209.948 303.167 215.449C312.004 221.644 319.286 228.76 317.832 241.338C316.999 248.532 321.207 250.802 328.107 248.16C338.559 244.158 346.819 237.175 354.212 229.032C356.033 227.028 357.243 224.635 357.654 221.904C357.904 221.81 358.281 221.793 358.392 221.61C362.283 215.332 368.317 213.861 375.195 213.534C381.972 213.212 388.7 211.885 395.478 211.58C400.312 211.363 405.158 210.181 410.026 211.258C406.185 213.906 404.67 216.243 406.157 219.118C408.966 224.541 409.949 229.692 407.029 235.421C406.019 237.408 407.717 238.962 409.721 238.335C418.419 235.604 427.24 233.162 435.044 228.205C436.337 227.383 437.248 227.505 438.486 228.416C442.288 231.197 446.346 233.583 450.448 235.909C460.056 241.355 462.588 241.21 470.919 234.05C479.101 227.017 484.397 217.342 492.468 210.192C492.684 210.003 492.612 209.487 492.673 209.126C501.249 207.467 509.986 207.156 518.624 205.962C529.625 204.436 540.666 203.176 551.59 201.105C556.73 200.128 561.854 199.068 566.988 198.047C567.166 197.986 567.344 197.925 567.516 197.864C568.065 197.475 568.62 197.114 569.192 196.776C568.62 197.109 568.06 197.475 567.516 197.864C567.338 197.925 567.16 197.986 566.988 198.047C561.226 202.549 554.471 205.807 550.141 212.102C546.422 217.508 542.292 222.615 537.78 227.4C536.103 229.176 535.032 231.335 533.977 233.489C533.289 234.905 533.356 236.37 534.66 237.525C539.217 241.56 544.108 242.137 549.42 239.09C558.734 233.744 567.321 227.317 575.97 220.994C578.867 218.879 581.826 216.798 584.279 214.122C586.389 213.317 587.843 211.591 589.636 210.336C603.002 201.005 616.841 192.396 630.634 183.726C632.316 182.665 633.743 181.056 635.913 180.878C634.903 184.847 637.457 187.178 640.071 189.21C644.323 192.518 649.163 194.894 654.242 196.642C658.411 198.075 661.098 200.883 662.752 204.802C666.965 214.766 667.609 225.346 666.61 235.826C665.96 242.62 665.605 249.426 665.228 256.209C664.756 264.663 670.512 268.054 677.839 263.886C687.642 258.313 695.996 250.919 701.558 241.083C710.511 225.252 718.927 209.11 724.783 191.797C728.324 181.322 732.043 170.892 733.131 159.774C740.969 159.385 748.724 157.992 756.223 156.021C770.994 152.141 785.976 149.116 800.574 144.492C813.291 140.468 826.397 137.703 839.153 133.751C843.555 132.386 847.923 130.865 851.837 128.356C855.75 125.847 856.172 123.421 853.352 119.863C852.414 118.68 853.258 118.475 854.062 118.192C856.144 117.448 858.198 116.571 860.335 116.038C872.636 112.991 884.659 109.072 895.877 103.171C903.36 99.2358 910.592 94.7451 915.721 87.6289C919.951 81.7617 919.552 76.0776 914.128 72.4695L914.151 72.4751ZM571.867 195.477C571.257 195.727 570.657 196.004 570.075 196.309C570.657 196.004 571.257 195.721 571.867 195.477Z';
let count=0;

let morphing = ()=>{
    target.addEventListener('click',(evt)=>{
        console.log(count)
        count++
        if (count==5){
            target.style.clipPath = "path('M49.5999 1.91C49.5999 1.91 51.6 6.98002 53.48 20.81C21.94 21.76 -29.76 59.22 22.34 92.23C50.56 109.39 65.52 102.47 76.38 80.44L80.7299 81.76C80.7299 81.76 75.17 45.61 76.5 39.51C69.67 48.35 77.26 68.98 72.58 76.11C58.85 106.89 2.40995 87.28 14.48 57.32C22.84 45.05 54.36 46.63 54.36 46.63L63.37 67.88C63.37 67.88 63.7 74.15 79.42 52.55C99.94 56.46 132.57 60.46 133 36.77C133.43 13.08 80.42 16.24 80.42 16.24C80.42 16.24 50.7899 -4.27995 49.5999 1.90005V1.91Z')"
        }
        if (count==10){
            target.style.clipPath = "path('M92.7801 1.74999C92.7801 1.74999 94.5501 6.90999 95.8001 20.81C64.2501 20.32 47.66 29.28 43.32 45.88C38.98 62.48 -5.23996 81.2 6.61004 59.69L10.8901 61.2C10.8901 61.2 6.97002 24.83 8.59002 18.8C1.36002 27.32 8.01006 48.28 3.01006 55.19C-12.0999 85.32 43.58 80.21 55.19 55.52C66.8 30.82 95.5101 46.65 95.5101 46.65L103.54 68.29C103.54 68.29 103.58 74.57 120.27 53.71C140.59 58.55 173.01 64.03 174.52 40.38C176.03 16.73 122.93 17.48 122.93 17.48C122.93 17.48 94.2601 -4.37 92.7901 1.76L92.7801 1.74999Z')";
        }
        if (count==15){
            target.style.clipPath = "path('M914.151 72.4751C911.63 70.7987 908.877 69.3999 905.846 68.7726C895.033 66.5523 884.27 64.0267 873.707 60.8849C866.025 58.5979 858.231 57.7542 850.377 57.2046C843.205 56.6995 835.989 56.8882 828.812 56.5108C824.232 56.2721 819.68 55.556 815.118 55.0565C809.544 54.4514 803.983 53.5022 798.398 53.3357C790.294 53.0914 782.195 52.4809 774.108 52.3143C762.484 52.0756 750.922 50.699 739.282 50.9599C734.408 51.0709 729.534 50.971 724.633 50.588C712.832 49.6777 701.053 51.0543 689.274 51.6982C680.742 52.1645 672.244 53.2857 663.712 53.7076C656.996 54.0406 650.307 54.6124 643.685 55.6171C633.31 57.1935 622.952 57.9818 612.439 57.8208C605.739 57.7153 599.722 56.0445 593.91 53.0803C579.755 45.8476 566.6 37.2104 554.81 26.4195C545.928 18.2986 535.781 11.8541 524.868 6.6973C519.423 4.19941 513.85 2.02902 508.021 0.608001C504.186 -0.324544 500.317 -0.174671 496.537 0.99101C492.784 2.14559 490.836 4.99874 491.047 8.9343C491.208 11.9151 491.896 14.7905 493.234 17.4604C500.356 31.6762 506.5 46.2861 510.986 61.5621C510.658 61.8174 510.53 62.1671 510.719 62.5279C512.09 65.1646 511.757 67.8512 511.063 70.5878C508.854 79.2915 504.619 87.035 499.773 94.4843C498.64 96.2272 497.025 97.2153 494.882 97.7704C488.116 99.5355 481.388 101.462 474.722 103.571C454.955 109.821 435.666 117.481 415.777 123.421C396.477 129.183 377.426 135.761 357.365 138.647C351.637 139.468 346.508 139.208 341.573 135.855C335.645 131.819 329.328 128.406 322.828 125.358C318.648 122.699 313.924 121.251 309.178 120.479C299.997 118.986 296.905 121.695 296.228 131.064C295.601 139.746 292.875 147.423 286.403 153.551C283.389 156.404 280.885 159.712 278.571 163.16C274.796 163.876 271.233 165.413 267.386 165.913C265.659 166.135 263.694 165.852 262.24 167.267C261.702 167.212 261.147 166.99 260.653 167.412C260.286 167.478 259.92 167.55 259.553 167.617C255.79 168.055 252.054 168.605 248.391 169.626C248.202 169.732 248.013 169.837 247.824 169.943C247.175 170.004 246.526 170.065 245.876 170.126C245.121 170.165 244.311 170.259 243.889 170.914C242.795 172.607 241.358 172.346 239.781 171.869C222.324 166.551 204.85 161.322 188.391 153.235C181.275 149.732 174.065 146.407 166.837 143.149C154.403 137.537 141.875 132.13 129.474 126.441C125.167 124.464 120.815 122.588 116.835 119.818C113.327 117.376 109.069 116.033 105.228 114.046C94.3597 108.411 83.6687 102.461 73.6272 95.4168C73.2942 95.106 72.9889 94.7451 72.617 94.4843C61.432 86.6076 50.5967 78.2702 39.9501 69.683C33.7664 64.6983 27.3385 60.0078 20.6442 55.7337C15.2599 52.2977 9.33707 50.8544 2.91472 51.9591C1.43264 52.2144 0.150391 52.6751 0.0893318 54.4237C-0.088296 59.3917 -0.310334 64.1821 2.7704 68.7726C8.48224 77.2766 13.2948 86.3633 19.0455 94.8673C22.9034 100.579 25.2958 106.89 26.7557 113.685C27.8215 118.647 31.6349 120.34 36.5585 118.914C37.8796 118.531 39.1841 118.02 40.4219 117.42C42.5313 116.399 44.7627 115.894 47.0386 115.483C48.5984 115.206 49.4698 115.311 49.6863 117.382C50.2303 122.583 52.5339 127.079 56.0754 130.931C58.3901 133.446 60.6826 135.983 63.0362 138.464C87.9707 164.758 115.203 188.433 144.445 209.815C150.346 214.128 155.675 219.101 160.77 224.363C164.517 228.232 164.856 232.507 164.029 237.402C162.197 248.238 158.461 258.418 154.098 268.437C151.961 273.344 150.274 278.418 150.851 283.985C151.406 289.325 153.493 291.074 158.716 289.875C167.77 287.788 175.824 283.475 183.273 278.085C192.899 271.118 200.814 262.237 209.34 254.049C211.328 252.14 213.426 250.308 214.936 247.955C215.652 246.239 217.733 245.523 218.116 243.569C220.548 242.071 221.913 239.606 223.589 237.447C230.406 228.671 237.861 220.478 246.02 212.945C248.74 210.436 251.799 208.704 255.912 208.81C262.828 208.982 269.811 209.032 276.667 208.244C286.603 207.1 295.323 209.948 303.167 215.449C312.004 221.644 319.286 228.76 317.832 241.338C316.999 248.532 321.207 250.802 328.107 248.16C338.559 244.158 346.819 237.175 354.212 229.032C356.033 227.028 357.243 224.635 357.654 221.904C357.904 221.81 358.281 221.793 358.392 221.61C362.283 215.332 368.317 213.861 375.195 213.534C381.972 213.212 388.7 211.885 395.478 211.58C400.312 211.363 405.158 210.181 410.026 211.258C406.185 213.906 404.67 216.243 406.157 219.118C408.966 224.541 409.949 229.692 407.029 235.421C406.019 237.408 407.717 238.962 409.721 238.335C418.419 235.604 427.24 233.162 435.044 228.205C436.337 227.383 437.248 227.505 438.486 228.416C442.288 231.197 446.346 233.583 450.448 235.909C460.056 241.355 462.588 241.21 470.919 234.05C479.101 227.017 484.397 217.342 492.468 210.192C492.684 210.003 492.612 209.487 492.673 209.126C501.249 207.467 509.986 207.156 518.624 205.962C529.625 204.436 540.666 203.176 551.59 201.105C556.73 200.128 561.854 199.068 566.988 198.047C567.166 197.986 567.344 197.925 567.516 197.864C568.065 197.475 568.62 197.114 569.192 196.776C568.62 197.109 568.06 197.475 567.516 197.864C567.338 197.925 567.16 197.986 566.988 198.047C561.226 202.549 554.471 205.807 550.141 212.102C546.422 217.508 542.292 222.615 537.78 227.4C536.103 229.176 535.032 231.335 533.977 233.489C533.289 234.905 533.356 236.37 534.66 237.525C539.217 241.56 544.108 242.137 549.42 239.09C558.734 233.744 567.321 227.317 575.97 220.994C578.867 218.879 581.826 216.798 584.279 214.122C586.389 213.317 587.843 211.591 589.636 210.336C603.002 201.005 616.841 192.396 630.634 183.726C632.316 182.665 633.743 181.056 635.913 180.878C634.903 184.847 637.457 187.178 640.071 189.21C644.323 192.518 649.163 194.894 654.242 196.642C658.411 198.075 661.098 200.883 662.752 204.802C666.965 214.766 667.609 225.346 666.61 235.826C665.96 242.62 665.605 249.426 665.228 256.209C664.756 264.663 670.512 268.054 677.839 263.886C687.642 258.313 695.996 250.919 701.558 241.083C710.511 225.252 718.927 209.11 724.783 191.797C728.324 181.322 732.043 170.892 733.131 159.774C740.969 159.385 748.724 157.992 756.223 156.021C770.994 152.141 785.976 149.116 800.574 144.492C813.291 140.468 826.397 137.703 839.153 133.751C843.555 132.386 847.923 130.865 851.837 128.356C855.75 125.847 856.172 123.421 853.352 119.863C852.414 118.68 853.258 118.475 854.062 118.192C856.144 117.448 858.198 116.571 860.335 116.038C872.636 112.991 884.659 109.072 895.877 103.171C903.36 99.2358 910.592 94.7451 915.721 87.6289C919.951 81.7617 919.552 76.0776 914.128 72.4695L914.151 72.4751ZM571.867 195.477C571.257 195.727 570.657 196.004 570.075 196.309C570.657 196.004 571.257 195.721 571.867 195.477Z')";
        }
    })
}

export{morphing}