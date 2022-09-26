package controller

import (
	"net/http"

	"github.com/TheerasakRa/AFS/config"
	"github.com/TheerasakRa/AFS/models"

	"github.com/gin-gonic/gin"
	"fmt"
)

func GetDataplants(c *gin.Context) {
	Dataplants := []models.Dataplants{}
	config.DB.Find(&Dataplants)
	c.JSON(http.StatusOK, &Dataplants)
}

func GetIdDataplants(c *gin.Context) {
	id := c.Param("id")
	getid_dataplants := []models.Dataplants{}
    if result := config.DB.Where("id = ?", id).Find(&getid_dataplants); result.Error != nil {
        c.IndentedJSON(http.StatusInternalServerError,
            gin.H{"Error": result.Error.Error()})
        return
    }
    c.IndentedJSON(http.StatusOK, &getid_dataplants)
}

func PostDataplants(c *gin.Context) {
	var new_Dataplants models.Dataplants
	c.BindJSON(&new_Dataplants)
	config.DB.Create(&new_Dataplants)
	c.JSON(http.StatusOK, &new_Dataplants)
}

func DeleteDataplants(c *gin.Context) {
	id := c.Param("id")
	delete_dataplants := []models.Dataplants{}
	if result := config.DB.Where("id = ?", id).Delete(&delete_dataplants); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusNoContent, &delete_dataplants)
}

func UpdateDataplants(c *gin.Context) {
	var update_dataplants models.Dataplants
	id := c.Params.ByName("id")
	if err := config.DB.Where("id = ?", id).First(&update_dataplants).Error; err != nil {
	   c.AbortWithStatus(404)
	   fmt.Println(err)
	}
	c.BindJSON(&update_dataplants)
	config.DB.Save(&update_dataplants)
	c.JSON(http.StatusNoContent, update_dataplants)
   }
