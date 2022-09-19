package controller

import (
	"github.com/TheerasakRa/AFS/config"
	"github.com/TheerasakRa/AFS/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetDataplants(c *gin.Context) {
	Dataplants := []models.Dataplants{}
	config.DB.Find(&Dataplants)
	c.JSON(http.StatusOK, &Dataplants)
}
func PostDataplants(c *gin.Context) {
	var new_Dataplants models.Dataplants
	c.BindJSON(&new_Dataplants)
	config.DB.Create(&new_Dataplants)
	c.JSON(http.StatusOK, &new_Dataplants)
}
