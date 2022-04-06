
#Table Config options

{
        "tableHeader": "sampleDatas Data",
        "columns": [
          { "field": "", "header": "", "sort": true, "filter": true ,"templateConfig":{"name":"EXPAND_ACTION"}},
          { "field": "id", "header": "ID", "sort": true, "filter": true ,"templateConfig":{"name":"DEFAULT"}},
          { "field": "obj.nested1.nested2", "header": "First Name", "sort": true, "filter": true ,"templateConfig":{"name":"DEFAULT"}},
          { "field": "last_name", "header": "Last Name", "sort": true, "filter": true ,"templateConfig":{"name":"DEFAULT"}},
          { "field": "gender", "header": "Gender", "sort": true, "filter": true ,"templateConfig":{"name":"DEFAULT"}},
          { "field": "unversity", "header": "University", "sort": false, "filter": true ,"templateConfig":{"name":"DEFAULT"}},
          { "field": "date", "header": "Date", "sort": false, "filter": true ,"templateConfig":{"name":"DATE","format":"MMM d, y"}},
          { "field": "", "header": "Actions", "sort": false, "filter": true ,"templateConfig":{"name":"ACTIONS"}}
        ],
        "lazyLoad":false,// true or false
        "pagination": true,// true or false
        "globalSearch": true,// true or false
        "recordsPerPage": 10,
        "rowExpand":true,// true or false
        "rowSelection":true,// true or false
        "selectionMode":"single", // single or multiple 
        responsive:true     // true or false
        "pagesSizes":[{"label":"10","value":10},{"label":"25","value":25},{"label":"50","value":50},{"label":"100","value":100},{"label":"50","value":500}]
    }


# For Nested Object in colum mention in field key 
    e.g  "field": "obj.nested1.nested2"
	
# For More than one field in single columnet pass field key in []  
    e.g "field": ["first_name","last_name"]
    e.g  "field": ["first_name","last_name","obj.nested1.nested2"]  

	
	