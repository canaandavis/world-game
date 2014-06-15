class HeroesController < ApplicationController
  def show
    @hero = Hero.find_by(id: params[:id])
    render json: @hero
  end

  def index
    @heroes = Hero.all
    @heroes = @heroes.map do |hero|
      {
        id: hero.id,
        name: hero.name
      }
    end
    render json: @heroes
  end

  def new
    @hero = Hero.new
  end

  def create
    @hero = Hero.new(hero_params)
    if @hero.save
      @message = "Saved Successfully"
    else
      @message = "Error with save"
    end
    redirect_to new_hero_path
  end

  private

  def hero_params
    params.require(:hero).permit(:name, :quote, :strength, :intellect, :agility, :dexterity)
  end
end
