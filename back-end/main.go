package main

import (
	"github.com/TheerasakRa/AFS/config"
	"github.com/TheerasakRa/AFS/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders: []string{"Content-Type,access-control-allow-origin, access-control-allow-headers"},
	}))
	config.Connect()
	routes.DataplantsRoute(router)
	routes.NoteRoute(router)
	router.Run(":8050")
}
