class ScenariosController < ApplicationController
  def show
    @scenario = Scenario.find_by(params[:id])
    render json: @scenario
  end

  def index
    @scenarios = Scenario.all
    @scenarios = @scenarios.map do |scenario|
      {
        id: scenario.id,
        name: scenario.name
      }
    end
    render json: @scenarios
  end

  def new
    @scenario = Scenario.new
  end

  def create
    scenario = Scenario.new(scenario_params)
    if scenario.save
      @message = "saved"
    else
      @message = "error"
    end
    redirect_to new_scenario_path
  end

  private

  def scenario_params
    params.require(:scenario).permit(:name, :weakness)
  end
end
