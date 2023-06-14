import React from "react";

export const SVGIcons = (props: { id: string }) => {
  switch (props.id) {
    case "Email":
      return (
        <svg width="100%" height="100%" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M107.5 54C107.5 83.5472 83.5472 107.5 54 107.5C24.4528 107.5 0.5 83.5472 0.5 54C0.5 24.4528 24.4528 0.5 54 0.5C83.5472 0.5 107.5 24.4528 107.5 54Z"
            fill="#366EFF"
            fill-opacity="0.05"
            stroke="#366EFF"
          />
          <path
            d="M87.6248 61.2611C87.4337 61.2586 87.2512 61.1816 87.1161 61.0465C86.981 60.9114 86.904 60.7289 86.9016 60.5379V50.1429C86.9016 49.951 86.9777 49.7671 87.1134 49.6315C87.249 49.4958 87.433 49.4196 87.6248 49.4196C87.8166 49.4196 88.0005 49.4958 88.1362 49.6315C88.2718 49.7671 88.348 49.951 88.348 50.1429V60.5475C88.3454 60.7376 88.2682 60.9191 88.1328 61.0527C87.9974 61.1862 87.8149 61.2611 87.6248 61.2611V61.2611Z"
            fill="#366EFF"
          />
          <path
            d="M87.6248 46.9993C87.433 46.9993 87.249 46.9231 87.1134 46.7875C86.9777 46.6519 86.9016 46.4679 86.9016 46.2761V44.145C86.9016 43.9532 86.9777 43.7693 87.1134 43.6336C87.249 43.498 87.433 43.4218 87.6248 43.4218C87.8166 43.4218 88.0005 43.498 88.1362 43.6336C88.2718 43.7693 88.348 43.9532 88.348 44.145V46.2857C88.348 46.3803 88.3292 46.4738 88.2928 46.5611C88.2563 46.6483 88.2029 46.7274 88.1356 46.7938C88.0683 46.8601 87.9885 46.9125 87.9008 46.9478C87.8131 46.9831 87.7193 47.0006 87.6248 46.9993Z"
            fill="#366EFF"
          />
          <path
            d="M29.0095 36.5656H25.0057C24.5913 36.5656 24.255 36.2293 24.255 35.8149C24.255 35.4005 24.5913 35.0642 25.0057 35.0642H29.0095C29.4239 35.0642 29.7602 35.4005 29.7602 35.8149C29.7602 36.2293 29.4239 36.5656 29.0095 36.5656Z"
            fill="#366EFF"
          />
          <path
            d="M27.0082 38.5677C26.5938 38.5677 26.2575 38.2313 26.2575 37.8169V33.8131C26.2575 33.3987 26.5938 33.0624 27.0082 33.0624C27.4226 33.0624 27.7589 33.3987 27.7589 33.8131V37.8169C27.7589 38.2313 27.4226 38.5677 27.0082 38.5677Z"
            fill="#366EFF"
          />
          <path
            d="M41.4643 82.9286C41.9966 82.9286 42.4286 83.3606 42.4286 83.8929C42.4286 84.4251 41.9966 84.8571 41.4643 84.8571C40.932 84.8571 40.5 84.4251 40.5 83.8929C40.5 83.3606 40.932 82.9286 41.4643 82.9286Z"
            fill="#366EFF"
          />
          <path
            d="M35.6786 82.9286C36.2109 82.9286 36.6429 83.3606 36.6429 83.8929C36.6429 84.4251 36.2109 84.8571 35.6786 84.8571C35.1463 84.8571 34.7143 84.4251 34.7143 83.8929C34.7143 83.3606 35.1463 82.9286 35.6786 82.9286Z"
            fill="#366EFF"
          />
          <path
            d="M29.8929 82.9286C30.4251 82.9286 30.8571 83.3606 30.8571 83.8929C30.8571 84.4251 30.4251 84.8571 29.8929 84.8571C29.3606 84.8571 28.9286 84.4251 28.9286 83.8929C28.9286 83.3606 29.3606 82.9286 29.8929 82.9286Z"
            fill="#366EFF"
          />
          <path d="M53.8476 26.1471L26.7355 48.4207L53.8476 70.7047L80.9596 48.4207L53.8476 26.1471Z" fill="white" />
          <path
            d="M53.8477 71.4866C53.6703 71.4716 53.504 71.394 53.3785 71.2676L26.2664 48.9836C26.1778 48.9098 26.1066 48.8173 26.0579 48.7127C26.0092 48.6082 25.9843 48.4941 25.9849 48.3788C25.9864 48.2638 26.0123 48.1504 26.0608 48.0462C26.1093 47.9419 26.1794 47.8492 26.2664 47.774L53.3785 25.5003C53.5219 25.3721 53.7075 25.3012 53.8999 25.3012C54.0923 25.3012 54.2779 25.3721 54.4213 25.5003L81.5333 47.774C81.6204 47.8492 81.6904 47.9419 81.739 48.0462C81.7875 48.1504 81.8134 48.2638 81.8149 48.3788C81.8155 48.4941 81.7905 48.6082 81.7418 48.7127C81.6932 48.8173 81.622 48.9098 81.5333 48.9836L54.4213 71.2676C54.3465 71.3425 54.2568 71.4007 54.1579 71.4384C54.0591 71.4762 53.9534 71.4926 53.8477 71.4866V71.4866ZM27.9661 48.4205L53.8477 69.693L79.7293 48.4205L53.8477 27.1584L27.9661 48.4205Z"
            fill="#366EFF"
          />
          <path d="M73.1392 32.4036H34.5566V78.2856H73.1392V32.4036Z" fill="white" />
          <path d="M62.3361 45.9597L49.1555 56.794V78.2856H73.1392V45.9597H62.3361Z" fill="white" />
          <path d="M62.3361 45.9597L49.1555 56.794V78.2856H73.1392V45.9597H62.3361Z" fill="white" />
          <path
            d="M73.1912 79.0675H34.6086C34.4021 79.0648 34.2047 78.9816 34.0586 78.8355C33.9125 78.6894 33.8293 78.492 33.8266 78.2855V32.4035C33.832 32.1997 33.9168 32.0061 34.0629 31.8639C34.209 31.7217 34.4048 31.6422 34.6086 31.6423H73.1912C73.3986 31.6423 73.5976 31.7247 73.7442 31.8713C73.8909 32.018 73.9733 32.2169 73.9733 32.4244V78.3063C73.9653 78.5092 73.8797 78.7014 73.7342 78.843C73.5886 78.9847 73.3943 79.065 73.1912 79.0675V79.0675ZM35.3386 77.5242H72.357V33.2064H35.3386V77.5242Z"
            fill="#366EFF"
          />
          <path
            d="M66.361 39.4423H54.1919C53.9844 39.4423 53.7855 39.3598 53.6389 39.2132C53.4922 39.0665 53.4098 38.8676 53.4098 38.6602C53.4098 38.4528 53.4922 38.2538 53.6389 38.1072C53.7855 37.9605 53.9844 37.8781 54.1919 37.8781H66.361C66.5684 37.8781 66.7674 37.9605 66.914 38.1072C67.0607 38.2538 67.1431 38.4528 67.1431 38.6602C67.1431 38.8676 67.0607 39.0665 66.914 39.2132C66.7674 39.3598 66.5684 39.4423 66.361 39.4423Z"
            fill="#366EFF"
          />
          <path
            d="M50.0207 39.4423H41.3344C41.127 39.4423 40.9281 39.3598 40.7814 39.2132C40.6348 39.0665 40.5524 38.8676 40.5524 38.6602C40.5524 38.4528 40.6348 38.2538 40.7814 38.1072C40.9281 37.9605 41.127 37.8781 41.3344 37.8781H50.0207C50.2282 37.8781 50.4271 37.9605 50.5738 38.1072C50.7204 38.2538 50.8028 38.4528 50.8028 38.6602C50.8028 38.8676 50.7204 39.0665 50.5738 39.2132C50.4271 39.3598 50.2282 39.4423 50.0207 39.4423Z"
            fill="#366EFF"
          />
          <path
            d="M66.3608 44.6561H58.3627C58.1553 44.6561 57.9564 44.5737 57.8097 44.4271C57.663 44.2804 57.5806 44.0815 57.5806 43.8741C57.5806 43.6666 57.663 43.4677 57.8097 43.321C57.9564 43.1744 58.1553 43.092 58.3627 43.092H66.3608C66.5682 43.092 66.7671 43.1744 66.9138 43.321C67.0605 43.4677 67.1428 43.6666 67.1428 43.8741C67.1428 44.0815 67.0605 44.2804 66.9138 44.4271C66.7671 44.5737 66.5682 44.6561 66.3608 44.6561Z"
            fill="#366EFF"
          />
          <path
            d="M54.1918 44.6561H41.3344C41.127 44.6561 40.9281 44.5737 40.7814 44.4271C40.6348 44.2804 40.5524 44.0815 40.5524 43.8741C40.5524 43.6666 40.6348 43.4677 40.7814 43.321C40.9281 43.1744 41.127 43.092 41.3344 43.092H54.1918C54.3992 43.092 54.5982 43.1744 54.7448 43.321C54.8915 43.4677 54.9739 43.6666 54.9739 43.8741C54.9739 44.0815 54.8915 44.2804 54.7448 44.4271C54.5982 44.5737 54.3992 44.6561 54.1918 44.6561V44.6561Z"
            fill="#366EFF"
          />
          <path
            d="M66.361 49.87H52.1063C51.8988 49.87 51.6999 49.7876 51.5532 49.6409C51.4066 49.4943 51.3242 49.2954 51.3242 49.0879C51.3242 48.8805 51.4066 48.6816 51.5532 48.5349C51.6999 48.3883 51.8988 48.3059 52.1063 48.3059H66.361C66.5684 48.3059 66.7673 48.3883 66.914 48.5349C67.0606 48.6816 67.143 48.8805 67.143 49.0879C67.143 49.2954 67.0606 49.4943 66.914 49.6409C66.7673 49.7876 66.5684 49.87 66.361 49.87Z"
            fill="#366EFF"
          />
          <path
            d="M47.9352 49.87H41.3344C41.127 49.87 40.9281 49.7876 40.7814 49.6409C40.6348 49.4943 40.5524 49.2954 40.5524 49.0879C40.5524 48.8805 40.6348 48.6816 40.7814 48.5349C40.9281 48.3883 41.127 48.3059 41.3344 48.3059H47.9352C48.1426 48.3059 48.3415 48.3883 48.4882 48.5349C48.6349 48.6816 48.7173 48.8805 48.7173 49.0879C48.7173 49.2954 48.6349 49.4943 48.4882 49.6409C48.3415 49.7876 48.1426 49.87 47.9352 49.87V49.87Z"
            fill="#366EFF"
          />
          <path
            d="M66.361 55.0839H59.4057C59.1983 55.0839 58.9994 55.0015 58.8527 54.8548C58.706 54.7081 58.6236 54.5092 58.6236 54.3018C58.6236 54.0944 58.706 53.8955 58.8527 53.7488C58.9994 53.6021 59.1983 53.5197 59.4057 53.5197H66.361C66.5684 53.5197 66.7673 53.6021 66.914 53.7488C67.0607 53.8955 67.1431 54.0944 67.1431 54.3018C67.1431 54.5092 67.0607 54.7081 66.914 54.8548C66.7673 55.0015 66.5684 55.0839 66.361 55.0839Z"
            fill="#366EFF"
          />
          <path
            d="M55.2346 55.0839H41.3344C41.127 55.0839 40.9281 55.0015 40.7814 54.8548C40.6348 54.7081 40.5524 54.5092 40.5524 54.3018C40.5524 54.0944 40.6348 53.8955 40.7814 53.7488C40.9281 53.6021 41.127 53.5197 41.3344 53.5197H55.2346C55.442 53.5197 55.6409 53.6021 55.7876 53.7488C55.9343 53.8955 56.0167 54.0944 56.0167 54.3018C56.0167 54.5092 55.9343 54.7081 55.7876 54.8548C55.6409 55.0015 55.442 55.0839 55.2346 55.0839Z"
            fill="#366EFF"
          />
          <path
            d="M60.8031 60.2978H46.8925C46.6851 60.2978 46.4862 60.2153 46.3395 60.0687C46.1928 59.922 46.1104 59.7231 46.1104 59.5157C46.1104 59.3083 46.1928 59.1093 46.3395 58.9627C46.4862 58.816 46.6851 58.7336 46.8925 58.7336H60.8031C61.0105 58.7336 61.2094 58.816 61.3561 58.9627C61.5028 59.1093 61.5852 59.3083 61.5852 59.5157C61.5852 59.7231 61.5028 59.922 61.3561 60.0687C61.2094 60.2153 61.0105 60.2978 60.8031 60.2978Z"
            fill="#366EFF"
          />
          <path d="M26.7355 48.4205V78.2855L44.9006 63.353L26.7355 48.4205Z" fill="white" />
          <path d="M62.7948 63.353L80.9599 78.2855V48.4205L62.7948 63.353Z" fill="white" />
          <path
            d="M53.8476 70.7046L44.9006 63.3531L26.7355 78.2856H80.9596L62.7946 63.3531L53.8476 70.7046Z"
            fill="white"
          />
          <path d="M31.9497 56.8043V73.9996L42.4087 65.4072L31.9497 56.8043Z" fill="white" />
          <path d="M31.9497 56.8043V73.9996L42.4087 65.4072L31.9497 56.8043Z" fill="white" />
          <path d="M71.0952 65.1153L80.9599 73.228V57.0129L71.0952 65.1153Z" fill="white" />
          <path d="M71.0952 65.1153L80.9599 73.228V57.0129L71.0952 65.1153Z" fill="white" />
          <path
            d="M26.7356 79.0676C26.6194 79.066 26.5052 79.0374 26.402 78.9841C26.2684 78.9225 26.1552 78.824 26.0758 78.7002C25.9964 78.5765 25.9539 78.4326 25.9536 78.2855V48.4205C25.9539 48.2734 25.9964 48.1295 26.0758 48.0057C26.1552 47.882 26.2684 47.7835 26.402 47.7218C26.5355 47.6566 26.685 47.6307 26.8327 47.6474C26.9805 47.664 27.1204 47.7224 27.2362 47.8157L45.4013 62.7482C45.4891 62.8226 45.5597 62.9152 45.6081 63.0197C45.6565 63.1241 45.6816 63.2379 45.6816 63.353C45.6816 63.4681 45.6565 63.5819 45.6081 63.6863C45.5597 63.7908 45.4891 63.8834 45.4013 63.9578L27.2362 78.8798C27.097 79.0001 26.9195 79.0666 26.7356 79.0676V79.0676ZM27.5177 50.0785V76.6275L43.6703 63.353L27.5177 50.0785Z"
            fill="#366EFF"
          />
          <path
            d="M67.9774 67.6074L56.5591 76.9923L48.5923 70.4437L39.0613 78.2854H80.9599L67.9774 67.6074Z"
            fill="white"
          />
          <path
            d="M67.9774 67.6074L56.5591 76.9923L48.5923 70.4437L39.0613 78.2854H80.9599L67.9774 67.6074Z"
            fill="white"
          />
          <path
            d="M80.9601 79.0676C80.7762 79.0666 80.5987 79.0001 80.4596 78.8799L62.2945 63.9682C62.2066 63.8938 62.136 63.8012 62.0876 63.6967C62.0392 63.5923 62.0141 63.4786 62.0141 63.3634C62.0141 63.2483 62.0392 63.1345 62.0876 63.0301C62.136 62.9256 62.2066 62.833 62.2945 62.7586L80.4908 47.8157C80.6066 47.7224 80.7465 47.664 80.8943 47.6474C81.042 47.6307 81.1915 47.6566 81.3251 47.7218C81.4586 47.7835 81.5718 47.882 81.6512 48.0057C81.7307 48.1295 81.7731 48.2734 81.7734 48.4205V78.2855C81.7731 78.4326 81.7307 78.5765 81.6512 78.7002C81.5718 78.824 81.4586 78.9225 81.3251 78.9841C81.2124 79.0423 81.0868 79.071 80.9601 79.0676ZM64.0255 63.353L80.178 76.6275V50.0785L64.0255 63.353Z"
            fill="#366EFF"
          />
          <path
            d="M80.9597 79.0676H26.7356C26.5737 79.0668 26.4159 79.0163 26.2836 78.9231C26.1512 78.8299 26.0506 78.6984 25.9952 78.5463C25.9429 78.3947 25.9379 78.2308 25.9807 78.0762C26.0235 77.9217 26.1122 77.7838 26.235 77.6807L44.4001 62.7482C44.5435 62.62 44.7291 62.5491 44.9215 62.5491C45.1139 62.5491 45.2995 62.62 45.4429 62.7482L53.8894 69.6931L62.3358 62.7482C62.4792 62.62 62.6648 62.5491 62.8572 62.5491C63.0496 62.5491 63.2352 62.62 63.3786 62.7482L81.5437 77.6807C81.6665 77.7838 81.7552 77.9217 81.798 78.0762C81.8408 78.2308 81.8358 78.3947 81.7835 78.5463C81.7239 78.7125 81.6105 78.8541 81.4613 78.9486C81.312 79.0431 81.1355 79.085 80.9597 79.0676V79.0676ZM28.915 77.5243H78.7803L62.7633 64.3646L54.3169 71.3094C54.1735 71.4377 53.9879 71.5086 53.7955 71.5086C53.6031 71.5086 53.4175 71.4377 53.2741 71.3094L44.8277 64.3646L28.915 77.5243Z"
            fill="#366EFF"
          />
          <path
            d="M52.1524 84.7799H48.1486C47.7342 84.7799 47.3979 84.4436 47.3979 84.0292C47.3979 83.6148 47.7342 83.2785 48.1486 83.2785H52.1524C52.5668 83.2785 52.9031 83.6148 52.9031 84.0292C52.9031 84.4436 52.5668 84.7799 52.1524 84.7799Z"
            fill="#366EFF"
          />
          <path
            d="M50.151 86.7819C49.7367 86.7819 49.4003 86.4456 49.4003 86.0312V82.0274C49.4003 81.613 49.7367 81.2767 50.151 81.2767C50.5654 81.2767 50.9018 81.613 50.9018 82.0274V86.0312C50.9018 86.4456 50.5654 86.7819 50.151 86.7819Z"
            fill="#366EFF"
          />
        </svg>
      );
    case "Logo":
      return (
        <svg width="100%" height="100%" viewBox="0 0 209 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            d="M55.3101 35.4004V14.1748H57.5744L69.5611 30.6507V14.1748H72.1451V35.4004H69.8318L57.8937 18.9088V35.4004H55.3101ZM104.958 30.3659V33.7898C103.893 34.4369 102.805 34.9291 101.699 35.2657C100.594 35.6023 99.4974 35.7734 98.4144 35.7734C97.3709 35.7734 96.3763 35.6129 95.4311 35.2969C94.4851 34.9758 93.593 34.5044 92.7495 33.8775C91.3998 32.8468 90.3477 31.5261 89.597 29.9257C88.8467 28.3198 88.4695 26.5796 88.4695 24.6944C88.4695 23.2699 88.7181 21.8872 89.211 20.5456C89.7039 19.2094 90.4097 18.0334 91.3198 17.0339C92.2919 15.9617 93.3801 15.1589 94.5831 14.6308C95.7906 14.097 97.1266 13.8328 98.5919 13.8328C99.6175 13.8328 100.63 13.9675 101.637 14.242C102.641 14.5166 103.697 14.9464 104.799 15.537V18.8365C103.644 18.1061 102.561 17.5672 101.544 17.2152C100.532 16.868 99.5464 16.6921 98.5919 16.6921C96.4654 16.6921 94.7117 17.4637 93.3219 19.0072C91.9324 20.5507 91.2399 22.4829 91.2399 24.8082C91.2399 27.1082 91.9236 29.0246 93.2909 30.5681C94.6583 32.1116 96.3719 32.8832 98.4365 32.8832C99.4974 32.8832 100.567 32.6761 101.651 32.2617C102.739 31.8473 103.84 31.2152 104.958 30.3659ZM107.831 14.1748H110.414V26.3568C110.414 27.7142 110.477 28.6774 110.601 29.2419C110.73 29.8064 110.938 30.2987 111.236 30.7131C111.773 31.4538 112.408 32.0026 113.145 32.3704C113.882 32.733 114.721 32.9143 115.658 32.9143C117.234 32.9143 118.503 32.4379 119.467 31.4898C120.43 30.5369 120.91 29.2834 120.91 27.7245V14.1748H123.494V27.8177C123.494 30.1794 122.77 32.0958 121.322 33.567C119.875 35.0378 117.988 35.7734 115.658 35.7734C114.277 35.7734 113.034 35.4885 111.924 34.9189C110.814 34.3437 109.882 33.5101 109.118 32.4067C108.647 31.7489 108.319 31.0185 108.124 30.2106C107.928 29.4027 107.831 28.1595 107.831 26.4813V14.1748ZM129.886 26.0463V32.6346H133.349C134.615 32.6346 135.538 32.3755 136.12 31.8524C136.705 31.3294 136.999 30.516 136.999 29.4027C136.999 28.2475 136.67 27.3982 136.017 26.8593C135.365 26.3157 134.335 26.0463 132.932 26.0463H129.886ZM127.303 35.4004V14.1748H132.63C134.446 14.1748 135.844 14.6564 136.825 15.6148C137.811 16.578 138.304 17.9402 138.304 19.7116C138.304 20.8047 138.082 21.7161 137.642 22.4414C137.199 23.1715 136.524 23.7309 135.614 24.1247C136.936 24.4925 137.962 25.1555 138.686 26.1134C139.409 27.077 139.769 28.2424 139.769 29.62C139.769 31.3811 139.218 32.7848 138.113 33.8309C137.007 34.8774 135.511 35.4004 133.62 35.4004H127.303ZM129.886 23.2805H131.645C132.972 23.2805 133.957 23.0008 134.597 22.4465C135.24 21.8923 135.56 21.0429 135.56 19.8981C135.56 18.8571 135.307 18.0958 134.801 17.6245C134.29 17.1477 133.483 16.9095 132.372 16.9095H129.886V23.2805ZM146.197 26.4192H151.867L148.995 18.7741L146.197 26.4192ZM140.199 35.4004L148.084 14.1748H149.98L157.967 35.4004H155.276L152.932 29.1538H145.181L142.868 35.4004H140.199ZM162.313 35.4004V16.9407H155.627V14.1748H171.583V16.9407H164.897V35.4004H162.313ZM175.494 24.8082C175.494 25.891 175.668 26.9269 176.014 27.9058C176.36 28.8848 176.862 29.7547 177.51 30.516C178.145 31.2725 178.886 31.8576 179.743 32.2669C180.595 32.6761 181.488 32.8832 182.416 32.8832C183.366 32.8832 184.263 32.6812 185.102 32.2822C185.937 31.8836 186.687 31.293 187.344 30.516C187.992 29.7547 188.494 28.8848 188.844 27.9058C189.195 26.9269 189.373 25.891 189.373 24.8082C189.373 23.7257 189.199 22.7053 188.853 21.737C188.507 20.7735 187.992 19.8878 187.317 19.0902C186.669 18.3079 185.923 17.7177 185.079 17.3085C184.24 16.8992 183.353 16.6921 182.416 16.6921C181.51 16.6921 180.64 16.8992 179.792 17.3136C178.948 17.728 178.185 18.3182 177.51 19.0902C176.862 19.8258 176.36 20.6906 176.014 21.6852C175.668 22.6745 175.494 23.7155 175.494 24.8082ZM172.724 24.6944C172.724 23.2805 172.973 21.9026 173.465 20.5716C173.958 19.2351 174.664 18.0543 175.574 17.0339C176.502 15.9929 177.55 15.2004 178.722 14.6513C179.89 14.1073 181.124 13.8328 182.416 13.8328C183.73 13.8328 184.982 14.1073 186.168 14.6616C187.348 15.2107 188.391 16.0032 189.293 17.0339C190.238 18.1061 190.949 19.3027 191.428 20.6131C191.903 21.9286 192.143 23.358 192.143 24.8963C192.143 26.3414 191.899 27.7296 191.406 29.0606C190.917 30.3919 190.221 31.5625 189.319 32.5722C188.374 33.6238 187.322 34.4215 186.154 34.9603C184.986 35.504 183.739 35.7734 182.416 35.7734C181.124 35.7734 179.885 35.4936 178.7 34.9394C177.519 34.38 176.476 33.5927 175.574 32.5722C174.638 31.5107 173.927 30.3089 173.448 28.978C172.964 27.6415 172.724 26.2119 172.724 24.6944ZM195.015 35.4004V14.1748H200.343C202.181 14.1748 203.601 14.6825 204.6 15.6923C205.599 16.7025 206.097 18.1373 206.097 19.9861C206.097 21.3847 205.822 22.5086 205.275 23.358C204.725 24.2073 203.864 24.8446 202.678 25.2692C202.984 25.4608 203.269 25.7148 203.54 26.036C203.81 26.3517 204.157 26.8854 204.583 27.6364L209 35.4004H205.852L202.732 29.8325C201.795 28.1543 201.04 27.0821 200.463 26.6211C199.89 26.1549 199.202 25.9219 198.408 25.9219H197.626V35.4004H195.015ZM197.626 23.3738H199.784C200.996 23.3738 201.901 23.0992 202.505 22.5552C203.105 22.0061 203.406 21.1725 203.406 20.0482C203.406 18.8934 203.122 18.0594 202.549 17.5364C201.977 17.0133 201.054 16.7542 199.784 16.7542H197.626V23.3738Z"
            fill="black"
          />
          <path
            clipRule="evenodd"
            d="M51.023 6.34448C52.573 6.34448 53.8298 7.59688 53.8298 9.14147C53.8298 10.6861 52.573 11.9384 51.023 11.9384C49.4729 11.9384 48.2161 10.6861 48.2161 9.14147C48.2161 7.59688 49.4729 6.34448 51.023 6.34448Z"
            fill="#FF0808"
          />
          <path
            clipRule="evenodd"
            d="M60.6823 0.664425C47.749 0.664425 37.2645 11.1123 37.2645 24.0002C37.2645 36.8877 47.749 47.3356 60.6823 47.3356C73.6158 47.3356 84.1006 36.8877 84.1006 24.0002C84.1006 11.1123 73.6158 0.664425 60.6823 0.664425ZM36.5977 24.0002C36.5977 10.7454 47.3807 0 60.6823 0C73.984 0 84.7673 10.7454 84.7673 24.0002C84.7673 37.2546 73.984 48 60.6823 48C47.3807 48 36.5977 37.2546 36.5977 24.0002Z"
            fill="black"
          />
          <path clipRule="evenodd" d="M49.7365 14.178H52.3092V35.3869H49.7365V14.178Z" fill="black" />
          <path
            clipRule="evenodd"
            d="M0 35.4179V14.2363H3.10743V35.4179H0ZM13.6985 35.4179V16.9966H5.73901V14.2363H24.7333V16.9966H16.7742V35.4179H13.6985Z"
            fill="black"
          />
          <path
            clipRule="evenodd"
            d="M28.569 22.78C30.1194 22.78 31.3759 24.032 31.3759 25.577C31.3759 27.122 30.1194 28.374 28.569 28.374C27.0186 28.374 25.7621 27.122 25.7621 25.577C25.7621 24.032 27.0186 22.78 28.569 22.78Z"
            fill="black"
          />
        </svg>
      );
    case "inputShowOn":
      return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.23997 17 6.99997 14.76 6.99997 12C6.99997 9.24 9.23997 6.99999 12 6.99999C14.76 6.99999 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 8.99997 10.34 8.99997 12C8.99997 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
            fill="black"
          />
        </svg>
      );
    case "inputShowOff":
      return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L22 22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path
            d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
