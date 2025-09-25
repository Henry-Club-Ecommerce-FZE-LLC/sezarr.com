export async function get({ request }) {
  // Extract query parameters
  const url = new URL(request.url);
  const state = url.searchParams.get('state');
  
  if (state) {
    // Return zip codes for a specific state
    const zipCodes = getZipCodesForState(state);
    return new Response(JSON.stringify({
      state,
      zipCodes
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
      },
    });
  } else {
    // Return list of states
    return new Response(JSON.stringify({
      states: getStates()
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
      },
    });
  }
}

/**
 * Get list of US states with abbreviations
 */
function getStates() {
  return [
    { name: "Alabama", code: "AL" },
    { name: "Alaska", code: "AK" },
    { name: "Arizona", code: "AZ" },
    { name: "Arkansas", code: "AR" },
    { name: "California", code: "CA" },
    { name: "Colorado", code: "CO" },
    { name: "Connecticut", code: "CT" },
    { name: "Delaware", code: "DE" },
    { name: "Florida", code: "FL" },
    { name: "Georgia", code: "GA" },
    { name: "Hawaii", code: "HI" },
    { name: "Idaho", code: "ID" },
    { name: "Illinois", code: "IL" },
    { name: "Indiana", code: "IN" },
    { name: "Iowa", code: "IA" },
    { name: "Kansas", code: "KS" },
    { name: "Kentucky", code: "KY" },
    { name: "Louisiana", code: "LA" },
    { name: "Maine", code: "ME" },
    { name: "Maryland", code: "MD" },
    { name: "Massachusetts", code: "MA" },
    { name: "Michigan", code: "MI" },
    { name: "Minnesota", code: "MN" },
    { name: "Mississippi", code: "MS" },
    { name: "Missouri", code: "MO" },
    { name: "Montana", code: "MT" },
    { name: "Nebraska", code: "NE" },
    { name: "Nevada", code: "NV" },
    { name: "New Hampshire", code: "NH" },
    { name: "New Jersey", code: "NJ" },
    { name: "New Mexico", code: "NM" },
    { name: "New York", code: "NY" },
    { name: "North Carolina", code: "NC" },
    { name: "North Dakota", code: "ND" },
    { name: "Ohio", code: "OH" },
    { name: "Oklahoma", code: "OK" },
    { name: "Oregon", code: "OR" },
    { name: "Pennsylvania", code: "PA" },
    { name: "Rhode Island", code: "RI" },
    { name: "South Carolina", code: "SC" },
    { name: "South Dakota", code: "SD" },
    { name: "Tennessee", code: "TN" },
    { name: "Texas", code: "TX" },
    { name: "Utah", code: "UT" },
    { name: "Vermont", code: "VT" },
    { name: "Virginia", code: "VA" },
    { name: "Washington", code: "WA" },
    { name: "West Virginia", code: "WV" },
    { name: "Wisconsin", code: "WI" },
    { name: "Wyoming", code: "WY" }
  ];
}

/**
 * Get sample zip codes for a state
 * This is a simplified version - a real implementation would use a database
 */
function getZipCodesForState(state) {
  // Sample zip codes for major cities in each state
  const stateSampleZips = {
    "AL": ["35203", "36104", "35805"],
    "AK": ["99501", "99701", "99901"],
    "AZ": ["85004", "85701", "86001"],
    "AR": ["72201", "72701", "71601"],
    "CA": ["90012", "94102", "95814"],
    "CO": ["80202", "80903", "81601"],
    "CT": ["06103", "06510", "06830"],
    "DE": ["19801", "19901", "19971"],
    "FL": ["32301", "33101", "32801"],
    "GA": ["30303", "31401", "30901"],
    "HI": ["96813", "96761", "96720"],
    "ID": ["83702", "83814", "83201"],
    "IL": ["60290", "62701", "61601"],
    "IN": ["46204", "47401", "46360"],
    "IA": ["50309", "52240", "51101"],
    "KS": ["66603", "67202", "66101"],
    "KY": ["40202", "41011", "42101"],
    "LA": ["70802", "71101", "70112"],
    "ME": ["04101", "04330", "04401"],
    "MD": ["21202", "20850", "21401"],
    "MA": ["02201", "01103", "02109"],
    "MI": ["48933", "49503", "48226"],
    "MN": ["55415", "55802", "56301"],
    "MS": ["39201", "39530", "38801"],
    "MO": ["64106", "65101", "63101"],
    "MT": ["59601", "59801", "59101"],
    "NE": ["68508", "68131", "69101"],
    "NV": ["89101", "89501", "89706"],
    "NH": ["03301", "03801", "03104"],
    "NJ": ["07102", "08608", "07306"],
    "NM": ["87501", "88001", "87102"],
    "NY": ["10007", "14202", "12207"],
    "NC": ["27601", "28202", "27401"],
    "ND": ["58501", "58102", "58701"],
    "OH": ["43215", "44114", "45202"],
    "OK": ["73102", "74103", "73301"],
    "OR": ["97204", "97401", "97501"],
    "PA": ["19107", "15219", "17101"],
    "RI": ["02903", "02840", "02860"],
    "SC": ["29201", "29401", "29601"],
    "SD": ["57501", "57701", "57104"],
    "TN": ["37219", "38103", "37902"],
    "TX": ["78701", "75202", "79901"],
    "UT": ["84111", "84401", "84770"],
    "VT": ["05602", "05401", "05301"],
    "VA": ["23219", "22314", "24011"],
    "WA": ["98104", "99201", "98501"],
    "WV": ["25301", "26003", "24701"],
    "WI": ["53703", "53202", "54701"],
    "WY": ["82001", "82501", "83001"]
  };
  
  return stateSampleZips[state] || ["00000"];
}