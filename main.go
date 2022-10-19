package main

import (

	// "fmt"
	 "github.com/gorilla/mux"
	 "net/http"
	"html/template"
)


func main() {
	route:=mux.NewRouter()

	route.PathPrefix("/asset/").Handler(http.StripPrefix("/asset/", http.FileServer(http.Dir("./asset"))))

	
	route.HandleFunc("/",home).Methods("GET")
	//route.HandleFunc("/blog-detail/{id}", blogDetail).Methods("GET")
	route.HandleFunc("/contact", contac).Methods("GET")
	route.HandleFunc("/my-project",blog).Methods("GET")
	route.HandleFunc("/form",form).Methods("GET")
	
	//route.HandleFunc("/form",add).Methods("GET")

	route.HandleFunc("/", hello).Methods("GET")

	http.ListenAndServe("localhost:5000",route)
}
func hello (w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type","texthtml; charset=utf-8")

	 var tmpl, err= template.ParseFiles("views/index.html")

	 if err != nil {

		 return
	 } 
	 
	 w.WriteHeader(http.StatusOK)
	 tmpl.Execute(w, nil)
	

	}

	func home(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
	
		var tmpl, err = template.ParseFiles("views/index.html")
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("message : " + err.Error()))
			return
		}
	
		w.WriteHeader(http.StatusOK)
		tmpl.Execute(w, nil)
		
	}
	func contac(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
	
		var tmpl, err = template.ParseFiles("views/contact.html")
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Message : " + err.Error()))
			return
		}
	
		w.WriteHeader(http.StatusOK)
		tmpl.Execute(w, nil)
	}
	
	func blog(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
	
		var tmpl, err = template.ParseFiles("views/my-project.html")
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Message : " + err.Error()))
			return
		}
	
		w.WriteHeader(http.StatusOK)
		tmpl.Execute(w, nil)
	}
	
	
	
	func form(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
	
		var tmpl, err = template.ParseFiles("views/form.html")
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			w.Write([]byte("Message : " + err.Error()))
			return
		}
	
		w.WriteHeader(http.StatusOK)
		tmpl.Execute(w, nil)
	}
	
	
