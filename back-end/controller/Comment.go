package controller

import (
	"net/http"

	"github.com/TheerasakRa/AFS/config"
	"github.com/TheerasakRa/AFS/models"

	"fmt"

	"github.com/gin-gonic/gin"
)

func GetDataComment(c *gin.Context) {
	Datacomment := []models.Comment{}
	config.DB.Find(&Datacomment)
	c.JSON(http.StatusOK, &Datacomment)
}

func GetIdDataComment(c *gin.Context) {
	id := c.Param("id")
	getid_datacomment := []models.Comment{}
	if result := config.DB.Where("id = ?", id).Find(&getid_datacomment); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, &getid_datacomment)
}

func PostComment(c *gin.Context) {
	var new_DataComment models.Comment
	c.BindJSON(&new_DataComment)
	config.DB.Create(&new_DataComment)
	c.JSON(http.StatusOK, &new_DataComment)
}

func DeleteComment(c *gin.Context) {
	id := c.Param("id")
	delete_dataComment := []models.Comment{}
	if result := config.DB.Where("id = ?", id).Delete(&delete_dataComment); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusNoContent, &delete_dataComment)
}

func UpdateComment(c *gin.Context) {
	var update_datacomment models.Comment
	id := c.Params.ByName("id")
	if err := config.DB.Where("id = ?", id).First(&update_datacomment).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&update_datacomment)
	config.DB.Save(&update_datacomment)
	c.JSON(http.StatusNoContent, update_datacomment)
}
